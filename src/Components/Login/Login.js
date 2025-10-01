import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
function Login(){
    const[userLoginData, setuserLoginData]= useState({email:"",password:""});
    function useremail(event){
        let user={...userLoginData}
        user["email"]=event.target.value;
        setuserLoginData(user);
    }
    function userpassword(event){
        let user={...userLoginData}
        user["password"]=event.target.value;
        setuserLoginData(user);
    }
    function handleLoginData(){
        axios.get("http://localhost:4200/user",userLoginData)
            .then((Response)=>{
                console.log(Response);
                navigate('/blogs')
            })
        
    }
    const navigate =useNavigate();
    //  function handleLoginButton(){
        
    //  }
    return(
        <div>
            <div className="loginsection">
                <div className="blogsname">Blogs!</div>
                <div>Public your passion,your way...</div>
                <hr />
                <div className="registername">Login</div>
                <label>Email</label><br />
                <input type="email" placeholder="test@gmail.com"  className="inputfielddata" value={userLoginData.email} onChange={useremail} /><br />
                <label>Password</label><br />
                <input type="password" placeholder="password"  className="inputfielddata" value={userLoginData.password} onChange={userpassword} /><br />
                <button className="loginbutton" onClick={handleLoginData}>Login</button>
            </div>

        </div>
    );
}export default Login;