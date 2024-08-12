import React from 'react';

const Button = ({type, onClick, children,backgroundColor,color = 'blue',width='auto',height = 'auto',className,id }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor?backgroundColor:"blue",
    height: height,
    width:width,
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <button type={type} onClick={onClick} style={buttonStyle} className={className} id={id}>
      {children}
    </button>
  );
};

export default Button;