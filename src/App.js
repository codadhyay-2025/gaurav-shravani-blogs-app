import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Dashboard></Dashboard> */}
      {/* <Register></Register> */}
      <Login></Login>
    </div>
  );
}

export default App;
