import "./CreateNewPost.css"
function CreateNewPost(){
    return(
        <div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title"/>
                <hr/>
                <textarea type="text" placeholder="Description"></textarea>
            <div className="titleButtons">
                <button className="button">Cancel</button>
                <button className="button">Save</button>
            </div>
            </div>

        </div>
    )
}
export default CreateNewPost;