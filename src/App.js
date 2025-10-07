import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import BlogsDashboard from './Components/BlogsDashboard/BlogsDashboard';
import CreateNewPost from './Components/CreateNewPost/CreateNewPost';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Header/>
      <Dashboard/>
      <BlogsDashboard/>
      <CreateNewPost/>
      <Login/>
      <Register/> */}
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/blogs' element={<BlogsDashboard/>}/>
          <Route path='/createpost/:id?' element={<CreateNewPost/>}/>
          <Route path='/createpost' element={<CreateNewPost/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
