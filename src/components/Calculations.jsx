import '../css/main.css';

function Calculations({calculations}) {
  return (
    <div className="calculations">
      { calculations.length > 0 ?
      <ul>
        {calculations.map((calculation, index) => (
          <li key={calculation.key}><strong>${calculation.initialAmount}</strong> in <strong>{calculation.initialYear}</strong> is the same as <strong>${calculation.finalAmount}</strong> in <strong>{calculation.finalYear}</strong></li>
        ))}
      </ul>
      : <span className="no-calculations"><em>There are no calculations (yet)</em></span> }
    </div>
  );
}

export default Calculations;
