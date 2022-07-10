import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import CounterArrow from './components/CounterArrow';
import CounterHook from './components/CounterHook';
import ParentName from './ParentChild/ParentName';
import ParentComponent from './ParentChild/ParentComponent';
import EmployeeList from './List/EmployeeList';
import ChartItem from './List/ChartItem';
import EmployeeForm from './form/EmployeeForm';
import ChartList from './form/ChartList';
import CartList from './View/CartListRedux'
import RegionView from './ViewApi/RegionView';
import CountrieView from './ViewApi/CountrieView';
import DepartmentView from './ViewApi/DepartmentView';
import LocationView from './ViewApi/LocationView';
import EmployeeView from './ViewApi/EmployeeView';
import JobView from './ViewApi/JobView';
import DependentView from './ViewApi/DependentView';
function App() {
  return (
    <div>
      <DependentView/>
    </div>
  );
}

export default App;
