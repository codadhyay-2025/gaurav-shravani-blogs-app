import "./Header.css";
function Header(){
    return(
        <div>
             {/* headersection */}
            <div className="headersection">
                <div className="blogsheadername">Blogs</div>
                <div>
                    <span className="actionloginbutton">Login</span>
                    <span className="actionregisterbutton">Register</span>
                </div>
            </div>
        </div>
    );
} export default Header;