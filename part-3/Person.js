const Person = ({ name, age, hobbies }) => {
  let votingMsg = age >= 18 ? 'Please go vote!' : 'You must be 18 to vote'

  return (
    <div>
      <h2>{name.slice(0, 6)}</h2>
      <p>Learn some information about this person</p>
      <h3>{votingMsg}</h3>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}
