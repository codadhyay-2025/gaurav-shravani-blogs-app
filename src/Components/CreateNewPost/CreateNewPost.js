import { useNavigate, useParams } from "react-router-dom";
import "./CreateNewPost.css"
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function CreateNewPost() {
    const navigate = useNavigate();
    const { id } = useParams();

    function handleCancelButton() {
        navigate('/blogs')
    }

    const [userData, setUserData] = useState({ title: "", description: "",likes:[],disLike:[] })

    function userTitle(event) {
        let user = { ...userData }
        user["title"] = (event.target.value)
        setUserData(user)
    }
    function userDesc(event) {
        let user = { ...userData }
        user["description"] = (event.target.value)
        setUserData(user)
    }

    useEffect(() => {
        if (id) {
            axios.get("http://localhost:4200/blogs/" + id)
                .then((response) => {
                    setUserData(response.data)
                })
        }
    },[])
    function handleSaveButton() {
        const email = localStorage.getItem("useremail")
        if (id) {
            axios.put("http://localhost:4200/blogs/" + id, userData)
                .then(() =>
                    // console.log(Response.data);
                    navigate("/blogs"))
        }
        else {
            axios.post("http://localhost:4200/blogs",
                {
                    ...userData,
                    created_by: email,
                    created_At: moment().format("YYYY/MM/DD"),
                    // likes:[],
                    // dislikes:[]
                })
                .then((response) => {
                    console.log(response);
                    navigate("/blogs")
                })
        }
    }
    return (
        <div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title" value={userData.title} onChange={userTitle} />
                <hr />
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