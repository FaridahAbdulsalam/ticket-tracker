import { useState } from "react";
import Ticket from "./components/Ticket//Ticket";
import team from "./data/team";
import TicketContainer from "./components/Ticket/TicketContainer/TicketContainer";


const App = () => {
  //write ts/js here and then inject into HTML in return
  let title = "Ticket Tracker";

  return (
    <div>
      <h1>{title}</h1>
      <TicketContainer employees={team} />
    </div>
  );
};

export default App;
