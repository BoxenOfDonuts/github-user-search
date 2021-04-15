import response from '../../helpers/response';

const ResultsPage = ()  => {
  const numberOfResults = response.total_count;
  const users = response.items;

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
    return <UserTab user={user} />
  })

  return (
    <ul>
      {content}
    </ul>
  );
}

const UserTab = ({ user }) => {
  return <li>{user.login}</li>;
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