import logo from '../images/inflation-station-logo_dark.svg';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="Inflation Station" draggable="false" />
      <h2>An Inflation Calculator</h2>
    </header>
  );
}

export default Header;
