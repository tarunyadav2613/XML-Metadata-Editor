import React from 'react';

const Button = ({ onClick, variant = 'primary', icon, children }) => {
  const variantStyles = {
    primary: 'bg-cyan-500 hover:bg-cyan-600',
    secondary: 'bg-gray-700 hover:bg-gray-600',
    success: 'bg-green-600 hover:bg-green-700',
    danger: 'bg-red-500 hover:bg-red-600'
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg ${variantStyles[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
