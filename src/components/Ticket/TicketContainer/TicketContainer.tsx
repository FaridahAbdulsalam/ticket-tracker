import React from 'react'
import Team from "../../../data/Teams";
import Ticket from "../Ticket";


type TicketProps ={
    employees: Team[];
}

const TicketContainer = ({employees} : TicketProps) => {
  return (
    <div>
      {employees.map((employee) => (
        <Ticket
        name={employee.name}
        role={employee.role}
        />
      ))}
    </div>
  )
}

export default TicketContainer
