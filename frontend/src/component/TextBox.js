const Input = ({ type, value, onChange, name, id, autoComplete, width = '270px', height = '37px', borderRadius = '5px', borderColor = 'gray',placeholder }) => {
    const inputStyle = {
      width: width,
      height:height,
      borderRadius: borderRadius,
      border: `1px solid ${borderColor}`,
      fontSize: '15px',
      padding: '8px',
      placeholder:placeholder?placeholder:"",
    };
    return (
      <input
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        style={inputStyle}
        placeholder={placeholder}
      />
    );
  };
  
export default Input;