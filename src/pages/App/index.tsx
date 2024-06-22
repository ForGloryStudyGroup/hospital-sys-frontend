import './styles.scss';

function App() {
  const name = process.env.REACT_APP_EXAMPLE;
  // TODO: Add features

  return (
    <div className="App">
      <h1>Base {name}</h1>
    </div>
  );
}

export default App;
