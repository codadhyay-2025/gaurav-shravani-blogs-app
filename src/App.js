import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import BlogsDashboard from './Components/BlogsDashboard/BlogsDashboard';
import CreateNewPost from './Components/Dashboard/CreateNewPost/CreateNewPost';

function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <BlogsDashboard/>
      <CreateNewPost/>
    </div>
  );
}

export default App;
