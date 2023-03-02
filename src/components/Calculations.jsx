function Calculations({calculations}) {
  return (
    <div className="calculations">
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

export default Calculations;
