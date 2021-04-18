import './Results.css';
import UserCard from '../UserCard/UserCard';

const ResultsPage = ({ resultCount, userInfo })  => {
  const numberOfResults = resultCount;
  console.log(userInfo)
  const users = userInfo;

  return (
    <div>
      <ResultsHeader numberOfResults={numberOfResults} />
      <SearchResults users={users} />
    </div>  
  );
}

const SearchResults = ({ users }) => {
  console.log(users)

  const content = users.map(user => {
    return <UserCard key={user.login} user={user} />
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
      <p>{numberOfResults}</p>
      <SortResults />
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