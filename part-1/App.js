const App = () => (
  <div>
    <FirstComponent />,
    <NamedComponent name="Beth" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
