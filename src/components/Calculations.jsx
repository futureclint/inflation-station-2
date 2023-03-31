import '../css/main.css';
import cross from '../images/cross.svg';

function Calculations({calculations}) {
  return (
    <div className="calculations">
      { calculations.length > 0 ?
      <ul>
        {calculations.map((calculation, index) => (
          <li key={calculation.key}>
            <span><strong>${calculation.initialAmount}</strong> in <strong>{calculation.initialYear}</strong> is the same as <strong>${calculation.finalAmount}</strong> in <strong>{calculation.finalYear}</strong></span>
            <button className="delete-calculation">
              <img className="cross" src={cross} alt="Close" draggable="false" />
            </button>
          </li>
        ))}
      </ul>
      : <span className="no-calculations"><em>There are no calculations (yet)</em></span> }
    </div>
  );
}

export default Calculations;
