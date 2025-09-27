import"./Dashboard.css";
function Dashboard(){
    return(
        <div>
            <div className="dashboardsection">
                <div className="blogsname">Blogs!</div>
                <div> Publish your passion,your way... </div>
                <hr/>
                <div className="actionbuttons">
                    <button className="actionlogin">Login</button>
                    <button className="actionregister">Register</button>
                </div>
            </div>
        </div>

    );
}
export default Dashboard;