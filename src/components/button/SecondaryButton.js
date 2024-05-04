import Button from "./Button";

const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return (
    <Button
      className="border-2 border-blue-500 p-2 hover:bg-blue-100 text-blue-500"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
