import { useState } from 'react';
import './css/main.css';
import Header from './components/Header';
import Calculate from './components/Calculate';
import Calculations from './components/Calculations';
import Footer from './components/Footer';

function App() {

  // State Variables
  const [calculations, setCalculations] = useState([]); // array of calculations

  return (
    <div className="App">
      <Header />
      <hr />
      <main>
        <Calculate
          calculations={calculations}
          setCalculations={setCalculations}
         />
        <hr />
        <Calculations
          calculations={calculations}
        />
      </main>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
