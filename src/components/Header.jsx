import logo from '../images/inflation-station-logo_dark.svg';

function Header() {
  return (
    <header>
      <div className="title">
        <img className="logo" src={logo} alt="Inflation Station" draggable="false" />
        <h2 className="subtitle">An Inflation Calculator</h2>
      </div>
    </header>
  );
}

export default Header;
