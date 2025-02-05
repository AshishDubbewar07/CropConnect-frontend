import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogManagement = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: null, // Store file object instead of URL
    category: "",
    published: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBlog({
      ...blog,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlog((prevState) => ({
      ...prevState,
      image: file, // Store actual file object
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    formData.append("category", blog.category);
    formData.append("published", blog.published);
    
    if (blog.image) {
      formData.append("image", blog.image); 
    }
    console.log(formData);
    try {
      await axios.post("http://localhost:8080/admin/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Blog created successfully!");
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Failed to create blog.");
    }
  };

  return (
    <>
      <AdminNavBar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Create Blog</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/admin/blogs")}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              See All Blogs
            </button>
            <button
              onClick={() => navigate("/admin/drafts")}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
            >
              See Draft Blogs
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={blog.title}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter blog title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={blog.content}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter blog content"
              rows="5"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={blog.category}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Category</option>
              <option value="Farming Techniques">Farming Techniques</option>
              <option value="Crop Management">Crop Management</option>
              <option value="Market Trends">Market Trends</option>
              <option value="Sustainable Farming">Sustainable Farming</option>
              <option value="Agricultural Equipment">Agricultural Equipment</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={blog.published}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500"
            />
            <label htmlFor="published" className="ml-2 text-sm font-medium text-gray-700">
              Published
            </label>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogManagement;
