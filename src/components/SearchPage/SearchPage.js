import SearchBar from '../Searchbar/Searchbar';
import './SearchPage.css';

const SearchPage = ({ setSearch }) => {
  return (
    <div className="search-page">
      <SearchBar setSearch={setSearch} />
    </div>
  );
}

export default SearchPage;