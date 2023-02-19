import './css/App.css';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Inflation Station</h1>
        <h2>An Inflation Calculator</h2>
      </header>
      <hr />
      <main>
        <form>
          <input type="text" placeholder="Initial Year" required />
          <input type="text" placeholder="Initial Amount" required />
          <br />
          <input type="text" placeholder="Final Year" required />
          <input type="text" placeholder="Final Amount" disabled />
          <br />
          <button>Calculate</button>
        </form>
      </main>
      <hr />
      <footer>
        <span>&copy; 2021&ndash;Present Clint Gunter</span>
      </footer>
    </div>
  );
}

export default App;
