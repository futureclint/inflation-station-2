import { useState } from 'react';
import data from '../data/cpidata.json';
import NewCalculation from './NewCalculation';

function Calculate({calculations, setCalculations}) {

  // Get starting and current (latest) years from CPI data and assign to constants
  const startingYear = data[0].year;
  const currentYear = data[data.length - 1].year;

  // State Variables
  const [calcKey, setCalcKey] = useState(0);
  const [initialYear, setInitialYear] = useState('');
  const [initialAmount, setInitialAmount] = useState('');
  const [finalYear, setFinalYear] = useState('');
  const [finalAmount, setFinalAmount] = useState('');

  // Function to handle form submission and assign calculations
  const submit = (event) => {
    // Prevent browser from submitting POST request
    event.preventDefault();

    // Call the new calculation function and assign value to calculated amount
    let calculatedAmount = NewCalculation(data, initialAmount, initialYear, finalAmount, finalYear);

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

    // Iterate calculation key state for new key
    setCalcKey(calcKey + 1);

    // Set new calculations state
    setCalculations([
      // Add new calculation to the beginning, assigning unique key
      {
        key: calcKey,
        initialYear: initialYear,
        initialAmount: calInitial,
        finalYear: finalYear,
        finalAmount: calFinal
      },
      // Preserve existing calculations
      ...calculations
    ])

    // Clear state variables back to their initial state
    setInitialAmount('');
    setInitialYear('');
    setFinalAmount('');
    setFinalYear('');
  };

  // Function to test whether amount inputs are either numbers or empty strings
  const testInputAmount = (input) => {
    if (Number(input)) {
      return true;
    } else if (input === '') {
      return true;
    } else {
      return false;
    }
  }

  // Function to test whether year inputs are within the valid range as they are typed in
  const testInputYear = (input) => {
    // Create variables for first 1, 2, and 3 digit versions of starting and current year to be used below
    let startingYearDigits1 = startingYear.toString().slice(0,1); // 1 for 1913
    let  currentYearDigits1 =  currentYear.toString().slice(0,1); // 2 for 2023
    let startingYearDigits2 = startingYear.toString().slice(0,2); // 19 for 1913
    let  currentYearDigits2 =  currentYear.toString().slice(0,2); // 20 for 2023
    let startingYearDigits3 = startingYear.toString().slice(0,3); // 191 for 1913
    let  currentYearDigits3 =  currentYear.toString().slice(0,3); // 202 for 2023

    if (input.length === 0) {
      return true;
      // If 1 digit and either 1 or 2 (for 1913 and 2023)
    } else if (input.length === 1 && (input === startingYearDigits1 || input === currentYearDigits1)) {
      return true;
      // If 2 digits and either 19 or 20 (for 1913 and 2023)
    } else if (input.length === 2 && (input === startingYearDigits2 || input === currentYearDigits2)) {
      return true;
      // If 3 digits and >= 191 or <= 202 (for 1913 and 2023)
    } else if (input.length === 3 && (input >= startingYearDigits3 && input <= currentYearDigits3)) {
      return true;
      // If 4 digits and >= 1913 or <= 2023 (for 1913 and 2023)
    } else if (input.length === 4 && (input >= startingYear && input <= currentYear)) {
      return true;
      // If none of the conditions above are satisfied, return as false
    } else {
      return false;
    }
  }

  return (
    <div className="calculate">
      <div className="instructions">
        <em>Enter any year between {startingYear}–{currentYear}</em>
      </div>
      <form onSubmit={submit}>
        <input
          value={initialAmount}
          // On change, call test input function, if input is valid set it, otherwise don't allow it
          onChange={event => { if (testInputAmount(event.target.value)) setInitialAmount(event.target.value); }}
          type="text"
          placeholder={ finalAmount ? "?" : "Initial Amount" }
          disabled={ finalAmount ? true : false }
          required={ finalAmount ? false : true }
        />
        <span className="in">in</span>
        <input
          value={initialYear}
          // On change, call test input function, if input is valid set it, otherwise don't allow it
          onChange={event => { if (testInputYear(event.target.value)) setInitialYear(event.target.value); }}
          type="text"
          maxlength="4"
          placeholder="Initial Year"
          required
        />
        <span className="same">is the same as</span>
        <input
          value={finalAmount}
          // On change, call test input function, if input is valid set it, otherwise don't allow it
          onChange={event => { if (testInputAmount(event.target.value)) setFinalAmount(event.target.value); }}
          type="text"
          placeholder={ initialAmount ? "?" : "Final Amount"}
          disabled={ initialAmount ? true : false }
          required={ initialAmount ? false : true }
        />
        <span>in</span>
        <input
          value={finalYear}
          // On change, call test input function, if input is valid set it, otherwise don't allow it
          onChange={event => { if (testInputYear(event.target.value)) setFinalYear(event.target.value); }}
          type="text"
          maxlength="4"
          placeholder="Final Year"
          required
        />
        <button>Calculate</button>
      </form>

    </div>
  );
}

export default Calculate;
