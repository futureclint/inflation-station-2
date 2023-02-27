import { useState } from 'react';

function Calculate() {

  const [initialYear, setInitialYear] = useState('');
  const [initialAmount, setInitialAmount] = useState('');
  const [finalYear, setFinalYear] = useState('');
  const [calculations, setCalculations] = useState([]);

  // Handle form submission
  const submit = (event) => {
    // Prevent browser from submitting POST request
    event.preventDefault();

    // Update list of calculations
    setCalculations([
      ...calculations,
      {
        initialYear: initialYear,
        initialAmount: initialAmount,
        finalYear: finalYear
      }
    ])

    // Clear states back to initial state
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

      {/* Temp Area: output calculations */}
      { calculations.length > 0 ?
      <ul>
        {calculations.map((calculation, index) => (
          <li key={index}>Initial Year: {calculation.initialYear}, Initial Amount: ${calculation.initialAmount}, Final Year: {calculation.finalYear}</li>
        ))}
      </ul>
      : <em>There are no calculations</em> }

    </div>
  );
}

export default Calculate;
