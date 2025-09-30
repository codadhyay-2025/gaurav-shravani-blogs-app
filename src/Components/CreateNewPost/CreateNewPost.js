import "./CreateNewPost.css"
function CreateNewPost(){
    return(
        <div>
            <div className="titleBox">
                <input type="text" placeholder="Title" className="title"/>
                <hr/>
                <textarea type="text" placeholder="Description"></textarea>
            <div className="titleButtons">
                <button className="button"><i class="fa fa-ban" aria-hidden="true"> Cancel</i></button>
                <button className="button"><i class="fa fa-bookmark" aria-hidden="true"> Save </i></button>
            </div>
            </div>

        </div>
    )
}
export default CreateNewPost;