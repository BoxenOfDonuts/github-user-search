const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <Avatar avatarURL={user.avatar_url} />
      <UserInfo user={user} />
    </div>
  );
}

const Avatar = ({ avatarURL }) => {
  return (
    <div className="left-icon">
      <img
        className="avatar"
        alt='user gravatar'
        src={avatarURL}
      />
  </div>
  )
}

const UserInfo = ({ user }) => {
  return (
    <>
      <div className="user-info main-info">
          <a href={user.html_url} className="user-link user-name">{user.name}</a>
          <a href={user.html_url} className="user-link secondary">{user.login}</a>
          <UserBio bio={user.bio} />
          <UserFooter location={user.location} email={user.email}/>
      </div>
    </>
  );
}

const UserBio = ({ bio }) => {
  return (
    <div className="user-info bio">
      <p>{bio}</p>
    </div>
  );
}

const UserFooter = ({ location, email }) => {
  return (
    <div className="user-info additional-info secondary">
      <p>{location}</p>
      <p>{email}</p>
  </div>
  );
}

export default UserCard;