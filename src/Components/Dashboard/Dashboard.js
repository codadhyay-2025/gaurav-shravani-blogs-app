import { useNavigate } from "react-router-dom";
import"./Dashboard.css";
function Dashboard(){
    const navigate=useNavigate();

    function handleLoginButton(){
        navigate('/login')
    }
    function handleregisterButton(){
        navigate('/register')
    }
    return(
        <div>
            <div className="dashboardsection">
                <div className="blogsname">Blogs!</div>
                <div> Publish your passion,your way... </div>
                <hr/>
                <div className="actionbuttons">
                    <button className="actionlogin" onClick={handleLoginButton}>Login</button>
                    <button className="actionregister" onClick={handleregisterButton}>Register</button>
                </div>
            </div>
        </div>

    );
}
export default Dashboard;