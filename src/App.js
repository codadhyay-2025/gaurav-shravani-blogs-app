import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import BlogsDashboard from './Components/BlogsDashboard/BlogsDashboard';
import CreateNewPost from './Components/CreateNewPost/CreateNewPost';

function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <BlogsDashboard/>
      <CreateNewPost/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
