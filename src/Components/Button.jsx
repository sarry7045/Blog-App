const Button = ({
  children,
  type = "button",
  backgroundColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${backgroundColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
