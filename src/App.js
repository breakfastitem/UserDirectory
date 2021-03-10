import './App.css';
import FilterForm from './components/FilterForm/FilterForm';
import SortDropDown from './components/SortDropDown/SortDropDown';
import UserTable from './components/UserTable/UserTable';
import getNames from './utils/API';
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [mainData, setMainData] = useState([]);



  useEffect(() => {

    getNames()
      .then(response => response.json())
      .then(data => {
        setUserData(data.results);
        setMainData(data.results);
      })
      .catch(err => {
        throw err;
      })

  }, []);

  /**
   * click handlers for sort and filter options
   */

  function filterByparam(filterValue, filterCase) {

    switch (filterCase) {
      case "first":
        setUserData(mainData.filter(user => {
          return user.name.first.toLowerCase().includes(filterValue);
        }))
        break;
      case "last":
        setUserData(mainData.filter(user => {
          return user.name.last.toLowerCase().includes(filterValue);
        }))
        break;
      case "age":
        setUserData(mainData.filter(user => {
          return user.dob === filterValue;
        }))
        break;
      default:
        console.log("Unknown case");
        break;
    }

  }


  return (
    <div className="container">

      <div className="row">
        <div className="col-12">
          <h1>User Directory</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <FilterForm filterHandler={filterByparam}/>
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
