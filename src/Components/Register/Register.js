import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
function Register() {
    const navigate =useNavigate();
     
   const[userRegisterData,setUserRegisterData]=useState({name:"",email:"",password:""});
   localStorage.setItem("userName", userRegisterData.name);
     function userName(event){
        let user={...userRegisterData}
        user["name"]=(event.target.value)
        setUserRegisterData(user)
     }
     function userEmail(event){
        let user={...userRegisterData}
        user["email"]=(event.target.value)
        setUserRegisterData(user)
     }
     function userPassword(event){
        let user={...userRegisterData}
        user["password"]=(event.target.value)
        setUserRegisterData(user)
     }

    function handleRegisterData(){
        if(!userRegisterData.email || !userRegisterData.email || !userRegisterData.password === null){
                alert("Please Enter Valid Details!")
        }
        else{
            axios.post("http://localhost:4200/user",userRegisterData)
            .then(()=>{
              navigate("/login") 
            })}

    }

    return (
        <div>
            <div className="registersection">
                <div className="blogsname">Blogs!</div>
                <div>Public your passion,your way...</div>
                <hr />
                <div className="registername">Register</div>
                <label>Name</label><br />
                <input type="text" placeholder="Firstname Lastname" value={userRegisterData.name} onChange={userName} className="inputfielddata" /><br />
                <label>Email</label><br />
                <input type="email" placeholder="test@gmail.com" value={userRegisterData.email} onChange={userEmail} className="inputfielddata" /><br />
                <label>Password</label><br />
                <input type="password" placeholder="password"   value={userRegisterData.password} onChange={userPassword} className="inputfielddata" /><br />
                <button className="registerbutton" onClick={handleRegisterData}>Register</button>
            </div>
        </div>
    );
} export default Register;