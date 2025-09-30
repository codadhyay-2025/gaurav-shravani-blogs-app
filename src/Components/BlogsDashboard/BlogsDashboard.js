import { useNavigate } from "react-router-dom";
import "./BlogsDashboard.css"
function BlogsDashboard() {
    const navigate = useNavigate();
    
    function handleCreateNewPostButton(){
        navigate('/createpost')
    }
    function handleEditButton(){
        navigate('/createpost')
    }
    return (
        <div>
            <div className="arrangingBlogs">
                <div className="blogHeader">
                    <div>
                        <div className="blogs">Blogs</div>
                        <span className="blogsText">Publish your passions, your way ...</span>
                    </div>
                    <button className="createNewPostButton" onClick={handleCreateNewPostButton}>Create new post</button>

                </div>
                <hr />
                <div className="blogSection">
                    <div className="blogTitle">Hello World</div>
                    <div><strong>Created By</strong></div>
                    <div><strong>Created At</strong></div>
                    <hr />
                    <div className="blogDesc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                    <div className="buttonsSection">
                        <div>
                            <button className="likeButton">Like</button>
                            <button className="DislikeButton">DisLike</button>
                        </div>
                        <div>
                            <button className="edit" onClick={handleEditButton}>Edit</button>
                            <button className="delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogsDashboard;