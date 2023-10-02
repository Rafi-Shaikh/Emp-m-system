import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>

      <HeaderComponent/>
      <Router>
    
    <div className="container">
      <Routes>
          <Route exact path="/" Component={ListEmployeeComponent} ></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" Component={CreateEmployeeComponent}></Route>
          <Route path="/update-employee/:id" Component={UpdateEmployeeComponent}></Route>
      </Routes>
    </div>

    </Router>
    <FooterComponent/>

    </div>
  );
}

export default App;
