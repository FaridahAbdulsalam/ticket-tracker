import "./Ticket.scss";
import { useState } from "react";

type TicketProps = {
  name: string;
  role: string;
};

const Ticket = ({ name, role }: TicketProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrment = () => {
    if(counter > 0)
      {
      setCounter(counter - 1)
    }
  };

  return (
    <div className="ticket">
      <h3 className="ticket__name">{name}</h3>
      <h4 className="ticket__role">{role}</h4>
      <div className="ticket__counter-border">
        <h4 className="ticket__counter">Counter</h4>
        <div className="ticket__counter-section">
          <button className="ticket__minus-button" onClick={handleDecrment}>
            -
          </button>
          <p>{counter}</p>
          <button className="ticket__plus-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
