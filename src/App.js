import { useHttp } from './hooks/useHttp';
import NavBar from './components/NavBar/NavBar';
import ResultsPage from './components/ResultsPage/ResultsPage';
import SearchPage from './components/SearchPage/SearchPage';
import { useEffect, useState } from 'react';
import { fakeInfo } from './helpers/response';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import './App.css';
const searchUsersURL = 'https://api.github.com/search/users';


const LandingPage = ({ children }) => {
  return (
    <div className='landing-container'>
      {children}
    </div>
  );
}

const App = () => {
  const [ url, setURL ] = useState(false)
  const [ isLoading, fetchedData, resultCount, error ] = useHttp(url, [url])
  const [ currentSearch, setCurrentSearch ] = useState('');
  const [ response, setResponse ] = useState(null);
  const [ usingFake, setUsingFake ] = useState(false);

  const setSearch = (search) => {
    const sanitizedSearch = sanitizeSearch(search);
    setCurrentSearch(sanitizedSearch)
    setURL(buildURL(sanitizedSearch, false))
  }

  const setSort = (sort) => {
    setURL(buildURL(currentSearch, sort))
  }

  const useFakeInfo = () => {
    setUsingFake(true);
    setResponse(fakeInfo);
  }

  useEffect(() => {
    if (fetchedData && !isLoading && !error) {
      setUsingFake(false);
      setResponse(fetchedData);
    }
  }, [isLoading])

  return (
    <div className="app">
      <NavBar didSearch={Boolean(response)} setSearch={setSearch} />
        <LandingPage>
          {!response && <SearchPage setSearch={setSearch} />}
          {response && <ResultsPage userInfo={response} resultCount={resultCount} setSort={setSort} />}
          {error && !usingFake && <ErrorMessage error={error} useFake={useFakeInfo}/>}
        </LandingPage>
    </div>
  );
};

const sanitizeSearch = (search) => {
  return encodeURIComponent(search.trim());
}

const buildURL = (search, sort) => {
  if (sort === undefined || !sort) {
    sort = '';
  }
  let newURL = `${searchUsersURL}?q=${search}&per_page=20&page=1&sort=${sort}`
  return newURL;
}

export default App;