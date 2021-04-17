import { useEffect, useState } from 'react';

const SearchBar = ({ setSearch }) => {
  const [ value, setValue ] = useState('');

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setValue(value);
  }

  const handleSubmit = (e) => {
    if (!value) return;
    e.preventDefault();
    setSearch(value);
    setValue('');
  }

  useEffect(() => {
    return () => {
      setValue('');
    }
  },[])

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="search"></label>
      <input type="text" name="search" placeholder="Search Github..." value={value} onChange={handleSearchInput} required/>
      <button>Search</button>
    </form>
  );
};

export default SearchBar;