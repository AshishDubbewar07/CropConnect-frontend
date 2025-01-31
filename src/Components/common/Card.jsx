import React from 'react'

const Card = () => {
  return (
       <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6">
      <img 
        className="w-full h-40 object-cover rounded-xl" 
        src="https://via.placeholder.com/300" 
        alt="Card Image" 
      />
      <div className="py-4">
        <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a simple card component built using Tailwind CSS.
        </p>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  )
}

export default Card
