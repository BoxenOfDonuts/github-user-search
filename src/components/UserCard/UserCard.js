const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <UserInfo user={user} />
      <UserBio bio={user.bio} />
      <UserFooter location={user.location} email={user.email}/>
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
      <Avatar avatarURL={user.avatar_url} />
      <div className="user-info main-info">
          <p>{user.name}</p>
          <p>{user.login}</p>
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
    <div className="user-info additional-info">
      <p>{location}</p>
      <p>{email}</p>
  </div>
  );
}

export default UserCard;