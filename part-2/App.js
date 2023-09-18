const App = () => (
  <div>
    <Tweet
      username="MissKitty"
      name="Pumpkin"
      date="2023-09-18"
      message="Meow meow"
    />
    ,
    <Tweet
      username="MrWhiskers"
      name="Mittens"
      date="2023-09-18"
      message="Purr purr purr"
    />
    ,
    <Tweet
      username="Snaggletooth"
      name="Ginger"
      date="2023-09-18"
      message="I love catnip!"
    />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
