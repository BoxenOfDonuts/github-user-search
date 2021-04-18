import SearchBar from '../Searchbar/Searchbar';

const NavBar = ({ didSearch, setSearch }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem>
          {didSearch && <SearchBar setSearch={setSearch} />}
        </NavItem>
        <NavItem>
          <span className="nav-title" style={{fontSize: '1.4rem'}} >{"Github User Search"}</span>
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ children }) => {
  return (
    <li style={{color: 'white'}}>{children}</li>
  );
};

export default NavBar;