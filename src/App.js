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
  const [ response, setResponse ] = useState(null)

  const setSearch = (search) => {
    const sanitizedSearch = sanitizeSearch(search);
    // setURL(`${searchUsersURL}?q=${sanitizedSearch}&per_page=20&page=1}`)
    setResponse(fakeInfo)
  }

  useEffect(() => {
    if (fetchedData && !isLoading) {
      setResponse(fetchedData);
    }
  }, [isLoading])

  // useEffect(() => {
  //   const regex = /&page=\d+/i
  //   const newURL = url.replace(regex, `page=${currentPage}`);
  //   console.log(newURL)
  //   setURL(newURL);
  // }, [currentPage])

  return (
    <div className="app">
      <NavBar didSearch={Boolean(response)} setSearch={setSearch} />
        <LandingPage>
          {!response && <SearchPage setSearch={setSearch} />}
          {response && <ResultsPage userInfo={response} resultCount={resultCount} />}
        </LandingPage>
    </div>
  );
};

const sanitizeSearch = (search) => {
  return encodeURIComponent(search.trim());
}

export default App;