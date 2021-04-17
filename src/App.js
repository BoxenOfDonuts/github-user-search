import { useHttp } from './hooks/useHttp';
import NavBar from './components/NavBar/NavBar';
import ResultsPage from './components/ResultsPage/ResultsPage';
import SearchBar from './components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import './App.css';
import { fakeInfo } from './helpers/response';
const searchUsersURL = 'https://api.github.com/search/users';


const LandingPage = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
}

const App = () => {
  const [ url, setURL ] = useState(false)
  const [ isLoading, fetchedData, resultCount ] = useHttp(url, [url])
  const [ response, setResponse ] = useState(null)

  const setSearch = (search) => {
    const sanitizedSearch = sanitizeSearch(search);
    // setURL(`${searchUsersURL}?q=${sanitizedSearch}&per_page=10`)
    setResponse(fakeInfo)
  }

  useEffect(() => {
    if (fetchedData && !isLoading) {
      setResponse(fetchedData);
    }
  }, [isLoading])

  return (
    <div className="app">
      <NavBar didSearch={Boolean(response)} setSearch={setSearch} />
        <LandingPage>
          {!response && <SearchBar setSearch={setSearch} />}
          {response && <ResultsPage userInfo={response} resultCount={resultCount} />}
        </LandingPage>
    </div>
  );
};

const sanitizeSearch = (search) => {
  return encodeURIComponent(search.trim());
}

export default App;