import { useNavigate, useParams } from "react-router-dom";
import "./BlogsDashboard.css"
import axios from "axios";
import { useEffect, useState } from "react";
function BlogsDashboard() {
    const navigate = useNavigate();
    const showloggedbuttons = localStorage.getItem("useremail")
    // const {id}=useParams();
    const [blogs, setblogs] = useState();
    // const[likes,setlikes]=useState();


    function handleCreateNewPostButton() {
        navigate('/createpost')
    }

    function handlelike(singleElement) {
        const userlike = localStorage.getItem('useremail');


        if (singleElement.likes.includes(userlike)) {

        }
        else {
            const updateLikes = [...singleElement.likes, userlike]
            axios.patch("http://localhost:4200/blogs/" + singleElement.id, { likes: updateLikes })
                .then(() => {
                    jsondata()
                })
                .catch(error => console.log("failed to update like:", error));

            // console.log(likes);
        }
    }
    function handledisLike(singleElement) {
        const userdisLike = localStorage.getItem('useremail')


        if (singleElement.disLike.includes(userdisLike)) {

        }
        else {
            const updatedisLikes = [...singleElement.disLike, userdisLike]
            axios.patch("http://localhost:4200/blogs/" + singleElement.id, { disLike: updatedisLikes })
                .then(() => {
                    jsondata()
                })
                .catch(error => console.log("failed to update like:", error));

            // console.log(likes);
        }

    }
    // const arr=[{
    //     title:"hello",
    //     created_by:"grv",
    //     created_At:"12/2/2001",
    //     description:"hello i am gaurav"
    // }];
    function jsondata() {
        axios.get("http://localhost:4200/blogs")
            .then((res) => {
                setblogs(res.data);

            })
            .catch((error) => {
                console.log("error get blogs", error);

            })
    }
    useEffect(() => {

        jsondata();
    }, [])
    function handleDeleteButton(id) {
        axios.delete("http://localhost:4200/blogs/" + id)
            .then((Response) => {
                console.log(Response);

                alert("blog deleted")
                jsondata();
            })
            .catch((error) => {
                console.error("error deleting blog", error);

            })
    }
    function handleEditButton(id) {
        // axios.patch("http://localhost:4200/blogs/"+id)
        // .then((Response)=>{
        //     console.log(Response.data);
        navigate("/createpost/" + id)
        // })
    }

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

                {blogs?.map((singleElement) => {
                    return <div className="blogSection">
                        <div className="blogTitle">{singleElement.title}</div>
                        <div><strong>Created By</strong> {singleElement.created_by}</div>
                        <div><strong>Created At</strong> {singleElement.created_At}</div>
                        <hr />
                        <div className="blogDesc">{singleElement.description}
                        </div>

                        <div className="buttonsSection">

                            <div>
                                <button className="likeButton"><i class="fa fa-thumbs-o-up" aria-hidden="true" onClick={() => handlelike(singleElement)}> {singleElement.likes.length} </i></button>
                                <button className="DislikeButton"><i class="fa fa-thumbs-o-down" aria-hidden="true" onClick={() => handledisLike(singleElement)}> {singleElement.disLike.length} </i></button>
                            </div>
                            {singleElement.created_by===showloggedbuttons?<div>
                                <button className="edit" onClick={() => handleEditButton(singleElement.id)}><i class="fa fa-pencil" aria-hidden="true"> Edit </i></button>
                                <button className="delete" onClick={() => handleDeleteButton(singleElement.id)}><i class="fa fa-trash" aria-hidden="true"> Delete </i></button>
                            </div>:null}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default BlogsDashboard;