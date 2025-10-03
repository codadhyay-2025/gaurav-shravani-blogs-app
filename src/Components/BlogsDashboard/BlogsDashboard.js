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
    const arr=[{
        title:"hello",
        created_by:"grv",
        created_At:"12/2/2001",
        description:"hello i am gaurav"

    }];
    
    return (
        <div>
            <div className="arrangingBlogs">
                <div className="blogHeader">
                    <div>
                        <div className="blogs">Blogs</div>
                        <span className="blogsText">Publish your passions, your way ...</span>
                    </div>
                    <button className="createNewPostButton" onClick={handleCreateNewPostButton}><i class="fa fa-plus-circle" aria-hidden="true"> Create new post </i> </button>

                </div>
                <hr />
                
                {arr.map((singleElement)=>{
                return <div className="blogSection">
                    <div className="blogTitle">{singleElement.title}</div>
                    <div><strong>Created By</strong>{singleElement.created_by}</div>
                    <div><strong>Created At</strong>{singleElement.created_At}</div>
                    <hr />
                    <div className="blogDesc">{singleElement.description}
                    </div>

                    <div className="buttonsSection">
                        <div>
                            <button className="likeButton"><i class="fa fa-thumbs-o-up" aria-hidden="true"> Like </i></button>
                            <button className="DislikeButton"><i class="fa fa-thumbs-o-down" aria-hidden="true"> DisLike </i></button>
                        </div>
                        <div>
                            <button className="edit" onClick={handleEditButton}><i class="fa fa-pencil" aria-hidden="true"> Edit </i></button>
                            <button className="delete"><i class="fa fa-trash" aria-hidden="true"> Delete </i></button>
                        </div>
                    </div>
                </div>})}
            </div>
        </div>
    )
}
export default BlogsDashboard;