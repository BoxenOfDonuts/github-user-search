import './Results.css';
import UserCard from '../UserCard/UserCard';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';

const ResultsPage = ({ resultCount, userInfo })  => {
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
      <ResultsHeader numberOfResults={resultCount} />
      <SearchResults users={currentPosts} />
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

const ResultsHeader = ({ numberOfResults }) => {
  
  return (
    <div className="results-header">
      <p className="header-item">{'Results '+ numberOfResults}</p>
      <SortResults className="header-item" />
    </div>
  );
}

const SortResults = () => {
  return (
    <form>
      <label htmlFor="sortBy">
        <select name="sortBy" id="sortBy">
          <option value="Best Match">Best Match</option>
          <option value="Most Followers">Most Followers</option>
        </select>
      </label>
    </form>
  )
}

export default ResultsPage;