import TicketContainer from '../../components/TicketContainer/TicketContainer'
import SearchBox from '../../components/SearchBox/SearchBox'
import Team from '../../data/Teams' 
import { FormEvent, useState } from 'react';
import "./SearchEmployees.scss"


type SearchEmployeesProps = {
    employees: Team[];
}


const SearchEmployees = ({employees}:SearchEmployeesProps) => {
    const [searchTerm, setSearchTerm]= useState<string>("")
    
    const handleInput = (event:FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase()
        setSearchTerm(input)
    }

    const filteredEmployees = employees.filter((employee) => {
       return employee.name.toLowerCase().includes(searchTerm)
    })

  return (
    <div>
      <SearchBox label='Employees' searchTerm={searchTerm} handleInput={handleInput}/>
      <section>
        <TicketContainer employees={filteredEmployees} />
      </section>
    </div>
  )
}

export default SearchEmployees
