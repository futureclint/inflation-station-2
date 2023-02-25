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

    // Clear states back to null
    setInitialYear(0);
    setInitialAmount(0);
    setFinalYear(0);
  };

  return (
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
  );
}

export default Calculate;
