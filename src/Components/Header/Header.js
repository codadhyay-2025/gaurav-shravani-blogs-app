import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header(){

    const navigate = useNavigate();

    function handleLoginButton(){
        navigate('/login')
    }
    function handleregisterButton(){
        navigate('/register')
    }
    function handleBlogName(){
        navigate('/')
    }

    return(
        <div>
             {/* headersection */}
            <div className="headersection">
                <div className="blogsheadername" onClick={handleBlogName}>Blogs</div>
                <div>
                    <span className="actionloginbutton" onClick={handleLoginButton}>Login</span>
                    <span className="actionregisterbutton" onClick={handleregisterButton}>Register</span>
                </div>
            </div>
        </div>
    );
} export default Header;