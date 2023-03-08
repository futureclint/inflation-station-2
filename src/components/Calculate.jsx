import { useState } from 'react';
import data from '../data/cpidata.json';

function Calculate({calculations, setCalculations}) {

  // State Variables
  const [initialYear, setInitialYear] = useState('');
  const [initialAmount, setInitialAmount] = useState('');
  const [finalYear, setFinalYear] = useState('');
  const [finalAmount, setFinalAmount] = useState('');

  // Function to create new calculation
  const newCalculation = (data, initialYear, initialAmount, finalYear) => {

    // Ensure given year is an integer value and amount is a number
    let year1 = parseInt(initialYear);
    let year2 = parseInt(finalYear);
    let amount1 = Number(initialAmount);

    // Attempt to find the CPI for the given year and assign to dataObj
    // If no year is found, returns as undefined
    let dataObj1 = data.find(({year}) => year === year1);
    let dataObj2 = data.find(({year}) => year === year2);

    // If dataObj is undefined, return an error
    if (dataObj1 === undefined || dataObj2 === undefined) {
      return "There was an error finding the CPI data";
    }
    // Else return the CPI value of the object
    else {
      // Assign CPI values of valid objects to variables
      let cpi1 = dataObj1.cpi, cpi2 = dataObj2.cpi;
      // Calculate final amount and return that value fixed to 2 decimal places
      return (amount1 * (cpi2 / cpi1)).toFixed(2);
    }
  }

  // Handle form submission
  const submit = (event) => {
    // Prevent browser from submitting POST request
    event.preventDefault();

    // Call create new calculation function, which returns final amount
    let finalAmount = newCalculation(data, initialYear, initialAmount, finalYear);

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
          value={initialAmount}
          onChange={event => setInitialAmount(event.target.value)}
          type="text"
          placeholder={ finalAmount ? "?" : "Initial Amount" }
          disabled={ finalAmount ? true : false }
          required={ finalAmount ? false : true }
        />
        <span className="in">in</span>
        <input
          value={initialYear}
          onChange={event => setInitialYear(event.target.value)}
          type="text"
          placeholder="Initial Year"
          required
        />
        <span className="same">is the same as</span>
        <input
          value={finalAmount}
          onChange={event => setFinalAmount(event.target.value)}
          type="text"
          placeholder={ initialAmount ? "?" : "Final Amount"}
          disabled={ initialAmount ? true : false }
          required={ initialAmount ? false : true }
        />
        <span>in</span>
        <input
          value={finalYear}
          onChange={event => setFinalYear(event.target.value)}
          type="text"
          placeholder="Final Year"
          required
        />
        <button>Calculate</button>
      </form>

    </div>
  );
}

export default Calculate;
