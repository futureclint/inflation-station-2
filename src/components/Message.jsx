import { useState } from 'react';
import cross from '../images/cross.svg';

function Message() {

  // State variables
  const [messageClose, setMessageClose] = useState(false);

  // Function to close message
  const closeMessage = () => {
    setMessageClose(true);
  }

  return (
    <div className={messageClose ? 'message close' : 'message'}>
      <span><em>This project is in active development, but I'm happy for you to try it out in the meantime!</em></span>
      <button onClick={closeMessage}>
        <img className="cross" src={cross} alt="Close" draggable="false" />
      </button>
    </div>
  );
}

export default Message;
