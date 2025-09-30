import { useNavigate } from "react-router-dom";
import "./CreateNewPost.css"
function CreateNewPost(){
    const navigate = useNavigate();

    function handleSaveButton(){
        navigate('/blogs')
    }
    function handleCancelButton(){
        navigate('/blogs')
    }
    return(
        <div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title"/>
                <hr/>
                <textarea type="text" placeholder="Description"></textarea>
            <div className="titleButtons">
                <button className="button" onClick={handleCancelButton}>Cancel</button>
                <button className="button" onClick={handleSaveButton}>Save</button>
            </div>
            </div>

        </div>
    )
}
export default CreateNewPost;