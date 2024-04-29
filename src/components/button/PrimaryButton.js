import Button from "./Button";

const PrimaryButton = (props) => {
  const { children, onClick, disabled } = props;
  return (
    <Button
      className="border-2 border-blue-500 bg-blue-500 p-2 hover:bg-blue-600 text-white"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
