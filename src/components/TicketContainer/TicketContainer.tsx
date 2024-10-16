import Team from "../../data/Teams";
import Ticket from "../Ticket/Ticket";
import "./TicketContainer.scss";

type TicketProps = {
  employees: Team[];
};

const TicketContainer = ({ employees }: TicketProps) => {
  return (
    <div className="ticket-display">
      {employees.map((employee) => (
        <Ticket key={employee.id} name={employee.name} role={employee.role} />
      ))}
    </div>
  );
};

export default TicketContainer;
