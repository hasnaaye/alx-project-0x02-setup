import React, { useState } from "react";

interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState({ title: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(post);
    setPost({ title: "", content: "" });
    onClose();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post title"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={post.content}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post content"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostModal;
