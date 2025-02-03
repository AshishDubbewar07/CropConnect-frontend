import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const BlogCard = ({ blog }) => {
  return (
    <Card className="w-full md:w-1/2 lg:w-1/3 p-4 shadow-lg rounded-2xl">
      <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />
      <CardContent>
        <Typography variant="h6" className="font-bold">
          {blog.title}
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          {blog.date}
        </Typography>
        <Button variant="contained" color="primary" className="mt-2">
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};
export default BlogCard;
