import { useState } from 'react';
import './css/main.css';
import Calculate from './components/Calculate';
import Calculations from './components/Calculations';

function App() {

  // TEMP: testing child to parent data
  const [data, setData] = useState('');
  const childToParent = (childData) => {
    setData(childData);
  }

  return (
    <div className="App">
      <header>
        <h1>Inflation Station</h1>
        <h2>An Inflation Calculator</h2>
      </header>
      <hr />
      <main>
        <Calculate childToParent={childToParent} />
        <br />
        <span>{data}</span>
        <br />
        <Calculations />
      </main>
      <hr />
      <footer>
        <span>&copy; 2021&ndash;Present Clint Gunter</span>
      </footer>
    </div>
  );
}

export default App;
