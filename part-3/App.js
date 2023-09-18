const App = () => (
  <div>
    <Person
      name="Erik"
      age={44}
      hobbies={['gardening', 'snowboarding', 'hiking']}
    />
    ,
    <Person
      name="Olly"
      age={7}
      hobbies={['baking', 'drawing', 'playing board games']}
    />
    ,
    <Person name="Beth" age={43} hobbies={['knitting', 'skiing', 'reading']} />,
    <Person
      name="Anders Eirik"
      age={3}
      hobbies={['running', 'baseball', 'sword-fighting']}
    />
    ,
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
