const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem>
          <SearchBar />
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ children }) => {
  return (
    <li>{children}</li>
  );
};

const SearchBar = () => {
  return (
    <form>
      <label htmlFor="search"></label>
      <input type="text" name="search" placeholder="Search Github..." />
    </form>
  );
};

export default NavBar;