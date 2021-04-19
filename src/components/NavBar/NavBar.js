
import './NavBar.css';
import SearchBar from '../Searchbar/Searchbar';

const NavBar = ({ didSearch, setSearch, reset }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {didSearch && <SearchBar setSearch={setSearch} />}
        <NavItem>
          <a href="!#" onClick={reset} className="reset-link">
            <span className="nav-title" >{"Github User Search"}</span>
          </a>
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