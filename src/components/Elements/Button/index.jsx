const Button = (props) => {
    const { classname, children, onClick = () => {} , type} = props;
    return (
      <button 
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
      >
        {children}
      </button>
    );
  };

  export default Button;