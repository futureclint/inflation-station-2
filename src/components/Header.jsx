import { useState } from 'react';
import logo from '../images/inflation-station-logo_dark.svg';
import cross from '../images/cross.svg';

function Header() {

  const [messageOut, setMessageOut] = useState(false);

  const closeMessage = () => {
    setMessageOut(true);
  }

  return (
    <header>
      <div className={messageOut ? 'message out' : 'message'}>
        <span><em>This project is in active development, but I'm happy for you to try it out in the meantime!</em></span>
        <button onClick={closeMessage}>
          <img className="cross" src={cross} alt="Close" draggable="false" />
        </button>
      </div>
      <div className="title">
        <img className="logo" src={logo} alt="Inflation Station" draggable="false" />
        <h2 className="subtitle">An Inflation Calculator</h2>
      </div>
    </header>
  );
}

export default Header;
