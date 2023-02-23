import { useState } from 'react';

function Calculate() {

  const [initialYear, setInitialYear] = useState(null);
  const [initialAmount, setInitialAmount] = useState(null);
  const [finalYear, setFinalYear] = useState(null);

  // Handle form submission
  const submit = event => {
    // Prevent browser from submitting POST request
    event.preventDefault();

    // Clear states back to null
    setInitialYear(null);
    setInitialAmount(null);
    setFinalYear(null);
  };

  return (
    <div className="calculate-form">
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
