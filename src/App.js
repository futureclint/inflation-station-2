import { useState } from 'react';
import './css/main.css';
import Calculate from './components/Calculate';
import Calculations from './components/Calculations';

function App() {

  // State Variables
  const [calculations, setCalculations] = useState([]); // array of calculations

  return (
    <div className="App">
      <header>
        <h1>Inflation Station</h1>
        <h2>An Inflation Calculator</h2>
      </header>
      <hr />
      <main>
        <Calculate
          calculations={calculations}
          setCalculations={setCalculations}
         />
        <Calculations
          calculations={calculations}
        />
      </main>
      <hr />
      <footer>
        <span>&copy; 2021&ndash;Present Clint Gunter</span>
      </footer>
    </div>
  );
}

export default App;
