import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: '1px solid #E42D2D',
        color: '#333',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '3px',
        width: '300px',
        height: '50px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
