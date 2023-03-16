function NewCalculation(data, initialAmount, initialYear, finalAmount, finalYear) {
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

export default NewCalculation;
