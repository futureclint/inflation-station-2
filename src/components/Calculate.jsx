import { useState } from 'react';
import data from '../data/cpidata.json';

function Calculate({calculations, setCalculations}) {

  // State Variables
  const [initialYear, setInitialYear] = useState('');
  const [initialAmount, setInitialAmount] = useState('');
  const [finalYear, setFinalYear] = useState('');
  const [finalAmount, setFinalAmount] = useState('');

  // Function to create new calculation
  const newCalculation = (data, initialAmount, initialYear, finalAmount, finalYear) => {

    // Ensure given year is an integer value and amount is a number
    // Whichever amount was not given will become 0
    let year1 = parseInt(initialYear);
    let year2 = parseInt(finalYear);
    let amount1 = Number(initialAmount);
    let amount2 = Number(finalAmount);

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

      // Calculate and return final amount
      // If amount is not 0, then it was given and we use it in the calculation
      if (amount1 !== 0) {
        return (amount1 * (cpi2 / cpi1));
      } else if (amount2 !== 0) {
        return (amount2 * (cpi1 / cpi2));
      } else {
        return "There was an error calculating the amount";
      }
    }
  }

  // Function to handle form submission and assign calculations
  const submit = (event) => {
    // Prevent browser from submitting POST request
    event.preventDefault();

    // Call the new calculation function and assign value to calculated amount
    let calculatedAmount = newCalculation(data, initialAmount, initialYear, finalAmount, finalYear);

    // Declare calculated variables for both amounts
    let calInitial, calFinal;

    // Assign amounts to both calculated variables, depending on which amount was given
    // Make sure amounts are numbers fixed to 2 decimal places
    if (initialAmount) {
      calInitial = Number(initialAmount).toFixed(2);
      calFinal = Number(calculatedAmount).toFixed(2);
    } else if (finalAmount) {
      calInitial = Number(calculatedAmount).toFixed(2);
      calFinal = Number(finalAmount).toFixed(2);
    }

    // Set new calculations state
    setCalculations([
      // Preserve existing calculations
      ...calculations,
      // Add new calculation to the end
      {
        initialYear: initialYear,
        initialAmount: calInitial,
        finalYear: finalYear,
        finalAmount: calFinal
      }
    ])

    // Clear state variables back to their initial state
    setInitialAmount('');
    setInitialYear('');
    setFinalAmount('');
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
