import './css/main.css';
import Calculate from './components/Calculate';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Inflation Station</h1>
        <h2>An Inflation Calculator</h2>
      </header>
      <hr />
      <main>
        <Calculate />
      </main>
      <hr />
      <footer>
        <span>&copy; 2021&ndash;Present Clint Gunter</span>
      </footer>
    </div>
  );
}

export default App;
