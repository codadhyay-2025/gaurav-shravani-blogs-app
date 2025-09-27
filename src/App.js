import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import BlogsDashboard from './Components/BlogsDashboard/BlogsDashboard';

function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <BlogsDashboard/>
    </div>
  );
}

export default App;
