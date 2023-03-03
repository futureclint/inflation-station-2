import { useState } from 'react';
import data from '../data/cpidata.json';

function Calculate({calculations, setCalculations}) {

  // State Variables
  const [initialYear, setInitialYear] = useState('');
  const [initialAmount, setInitialAmount] = useState('');
  const [finalYear, setFinalYear] = useState('');

  // Function to create new calculation
  const newCalculation = (data) => {
    let newValue = data[0].year;
    return `test final amount ${newValue}`;
  }

  // Handle form submission
  const submit = (event) => {
    // Prevent browser from submitting POST request
    event.preventDefault();

    // Call create new calculation function, which returns final amount
    let finalAmount = newCalculation(data);

    // Set new calculations state
    setCalculations([
      // Preserve existing calculations
      ...calculations,
      // Add new calculation to the end
      {
        initialYear: initialYear,
        initialAmount: initialAmount,
        finalYear: finalYear,
        finalAmount: finalAmount
      }
    ])

    // Clear state variables back to their initial state
    setInitialYear('');
    setInitialAmount('');
    setFinalYear('');
  };

  return (
    <div className="calculate">
      <form onSubmit={submit}>
        <input
          value={initialYear}
          onChange={event => setInitialYear(event.target.value)}
          type="text"
          placeholder="Initial Year"
          required
        />
        <input
          value={initialAmount}
          onChange={event => setInitialAmount(event.target.value)}
          type="text"
          placeholder="Initial Amount"
          required
        />
        <br />
        <input
          value={finalYear}
          onChange={event => setFinalYear(event.target.value)}
          type="text"
          placeholder="Final Year"
          required
        />
        <input type="text" placeholder="Final Amount" disabled />
        <br />
        <button>Calculate</button>
      </form>

    </div>
  );
}

export default Calculate;
