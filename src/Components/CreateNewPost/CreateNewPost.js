import { useNavigate } from "react-router-dom";
import "./CreateNewPost.css"
import { useState } from "react";
import axios from "axios";
function CreateNewPost(){
    const navigate = useNavigate();

   
    function handleCancelButton(){
        navigate('/blogs')
    }

    const[userData,setUserData]=useState({title:"", description:""})

    function userTitle(event){
        let user={...userData}
        user["title"]=(event.target.value)
        setUserData(user)
    }
     function userDesc(event){
        let user={...userData}
        user["description"]=(event.target.value)
        setUserData(user)
    }
    function handleSaveButton(){
    axios.post("http://localhost:4200/blogs",userData)
            .then((response)=>{
                console.log(response);
                navigate("/blogs")
                
        })
    
    }
    return(
        <div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title" value={userData.title} onChange={userTitle}/>
                <hr/>
                <textarea type="text" placeholder="Description" value={userData.description} onChange={userDesc}></textarea>
            <div className="titleButtons">
                <button className="button" onClick={handleCancelButton}><i class="fa fa-ban" aria-hidden="true"> Cancel</i></button>
                <button className="button" onClick={handleSaveButton}><i class="fa fa-bookmark" aria-hidden="true"> Save </i></button>
            </div>
            </div>

        </div>
    )
}
export default CreateNewPost;