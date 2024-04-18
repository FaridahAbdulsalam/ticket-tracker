import team from "./data/team";
import SearchEmployees from "./containers/SearchEmployees/SearchEmployees";
import "./App.scss"

const App = () => {
  //write ts/js here and then inject into HTML in return
  let title = "Ticket Tracker";

  return (
    <div>
      <h1>{title}</h1>
      <h4>Search for employees below</h4>
        <SearchEmployees employees={team}/>
    </div>
  );
};

export default App;
