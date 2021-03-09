import logo from './logo.svg';
import './App.css';
import FilterForm from './components/FilterForm/FilterForm';
import SortDropDown from './components/SortDropDown/SortDropDown';
import UserRow from './components/UserRow/UserRow';

function App() {
  return (
    <div className="App">
      <h1>User Directory</h1>

      <FilterForm />
      <SortDropDown />
      <UserRow />
    </div>
  );
}

export default App;
