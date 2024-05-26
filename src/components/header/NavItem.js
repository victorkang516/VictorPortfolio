const NavItem = (props) => {
  const { children, href } = props;
  return (
    <a
      href={href}
      className="flex justify-center items-center hover:bg-white hover:text-black px-4 py-2 rounded-full"
    >
      {children}
    </a>
  );
};

export default NavItem;
