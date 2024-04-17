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
  }

  const handleDecrment = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <div>
        <h4>Counter</h4>
        <button onClick={handleDecrment}>-</button>
        <p>{counter}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Ticket;


