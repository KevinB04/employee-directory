import EmployeeTable from "./components/Table/EmployeeTable";
import Header from "./components/Header/header";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Employee Directory</h1>
            <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;