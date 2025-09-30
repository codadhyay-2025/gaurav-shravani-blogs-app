import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login(){
    const navigate =useNavigate();
     function handleLoginButton(){
        navigate('/blogs')
     }
    return(
        <div>
            <div className="loginsection">
                <div className="blogsname">Blogs!</div>
                <div>Public your passion,your way...</div>
                <hr />
                <div className="registername">Login</div>
                <label>Email</label><br />
                <input type="email" placeholder="test@gmail.com"  className="inputfielddata" /><br />
                <label>Password</label><br />
                <input type="password" placeholder="password"  className="inputfielddata" /><br />
                <button className="loginbutton" onClick={handleLoginButton}>Login</button>
            </div>

        </div>
    );
}export default Login;