
import './NavBar.css';
import SearchBar from '../Searchbar/Searchbar';

const NavBar = ({ didSearch, setSearch }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {didSearch && <SearchBar setSearch={setSearch} />}
        <NavItem>
          <span className="nav-title" >{"Github User Search"}</span>
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className='nav-item'>{children}</li>
  );
};

export default NavBar;