const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{username}</p>
      <small>{date}</small>
      <p>{message}</p>
    </div>
  )
}
