const NavItem = (props) => {
  const { children, href, onClick } = props;
  return (
    <a
      href={href}
      className="flex justify-center items-center font-medium hover:bg-white hover:text-black px-4 py-2 rounded-full"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavItem;
