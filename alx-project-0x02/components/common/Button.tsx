import React from 'react';


const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded" 
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
