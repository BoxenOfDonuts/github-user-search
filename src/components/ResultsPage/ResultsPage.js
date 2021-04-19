import './Results.css';
import UserCard from '../UserCard/UserCard';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';

const ResultsPage = ({ resultCount, userInfo, setSort })  => {
  console.log(userInfo);

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postPerPage, setPostsPerPage ] = useState(5);
  const totalPosts = userInfo.length;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userInfo.slice(indexOfFirstPost, indexOfLastPost)

  const goToPage = (number) => {
    setCurrentPage(number);
  }


  return (
    <div className="results-page">
      <ResultsHeader
        numberOfResults={resultCount} 
        setSort={setSort} 
      />
      <SearchResults
        users={currentPosts}
      />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        goToPage={goToPage}
        currentPage={currentPage}
      />
    </div>  
  );
}

const SearchResults = ({ users }) => {
  console.log(users)

  const content = users.map(user => {
    return <UserCard key={user.id} user={user} />
  })

  return (
    <ul>
      {content}
    </ul>
  );
}

const ResultsHeader = ({ numberOfResults, setSort }) => {
  
  return (
    <div className="results-header">
      <p className="header-item">{'Results '+ numberOfResults}</p>
      <SortResults onSort={setSort} className="header-item" />
    </div>
  );
}

const SortResults = ({ onSort }) => {
  const onSelect = (e) => {
    const { value } = e.target;
    onSort(value)
  } 

  return (
    <form onChange={onSelect}>
      <label htmlFor="sortBy">
        <select name="sortBy" id="sortBy">
          <option value="best">Best Match</option>
          <option value="followers">Most Followers</option>
          <option value="repositories">Most Repositories</option>
          <option value="joined">Most Recently Joined</option>
        </select>
      </label>
    </form>
  )
}

export default ResultsPage;