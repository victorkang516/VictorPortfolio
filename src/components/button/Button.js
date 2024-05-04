const Button = (props) => {
  const { children, className, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      className={`flex flex-row justify-center items-center rounded-sm ${className} disabled:bg-gray-400 disabled:border-gray-400 disabled:hover:bg-gray-400 `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
