import { useHttp } from './hooks/useHttp';
import NavBar from './components/NavBar/NavBar';
import ResultsPage from './components/ResultsPage/ResultsPage';
import SearchPage from './components/SearchPage/SearchPage';
import { useEffect, useState } from 'react';
import { fakeInfo } from './helpers/response';
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
  const [ isLoading, fetchedData, resultCount ] = useHttp(url, [url])
  const [ currentSearch, setCurrentSearch ] = useState('');
  const [ response, setResponse ] = useState(null)

  const setSearch = (search) => {
    const sanitizedSearch = sanitizeSearch(search);
    setCurrentSearch(sanitizedSearch)
    // setURL(buildURL(sanitizedSearch, false))
    setResponse(fakeInfo)
  }

  const setSort = (sort) => {
    // setURL(buildURL(currentSearch, sort))
  }

  useEffect(() => {
    if (fetchedData && !isLoading) {
      setResponse(fetchedData);
    }
  }, [isLoading])

  useEffect(() => {
    // const regex = /&page=\d+/i
    // const newURL = url.replace(regex, `page=${}`);
    // console.log(newURL)
    // setURL(newURL);
  })

  return (
    <div className="app">
      <NavBar didSearch={Boolean(response)} setSearch={setSearch} />
        <LandingPage>
          {!response && <SearchPage setSearch={setSearch} />}
          {response && <ResultsPage userInfo={response} resultCount={resultCount} setSort={setSort} />}
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