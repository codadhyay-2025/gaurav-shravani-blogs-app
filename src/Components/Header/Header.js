import { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header(){
    // const[username,setusername]=useState({name:""});
    const userEmail = localStorage.getItem("useremail");
    const username = localStorage.getItem("userName");
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
    function handleLogoutUser(){
        localStorage.removeItem("useremail")
        navigate('/')
    }

    return(
        <div>
             {/* headersection */}
            <div className="headersection">
                <div className="blogsheadername" onClick={handleBlogName}>Blogs</div>
                {userEmail?(
                    <div>
                    <span className="actionloginbutton" onClick={handleLoginButton}>{username}</span>
                    <span className="actionregisterbutton" onClick={handleLogoutUser}>LogOut</span>
                    
                  </div>  
                ):(
                <div>
                    <span className="actionloginbutton" onClick={handleLoginButton}>Login</span>
                    <span className="actionregisterbutton" onClick={handleregisterButton}>Register</span>
                </div>)}
            </div>
        </div>
    );
} export default Header;