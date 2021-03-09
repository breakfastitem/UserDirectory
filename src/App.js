import logo from './logo.svg';
import './App.css';
import FilterForm from './components/FilterForm/FilterForm';
import SortDropDown from './components/SortDropDown/SortDropDown';

function App() {
  return (
    <div className="App">
      <h1>User Directory</h1>

      <FilterForm />
      <SortDropDown />
    </div>
  );
}

export default App;
