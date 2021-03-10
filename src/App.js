import './App.css';
import FilterForm from './components/FilterForm/FilterForm';
import SortDropDown from './components/SortDropDown/SortDropDown';
import UserTable from './components/UserTable/UserTable';
import getNames from './utils/API';
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);



  useEffect(() => {

    getNames()
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(err => {
        throw err;
      })
      
  }, []);


  return (
    <div className="container">

      <div className="row">
        <div className="col-12">
          <h1>User Directory</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <FilterForm />
        </div>
        <div className="col-4">
          <SortDropDown />
        </div>

      </div>

      <div className="row">
        <div className="col-12">
          <UserTable users={userData} />
        </div>
      </div>

    </div>
  );
}

export default App;
