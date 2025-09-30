import "./Login.css";
function Login(){
    return(
        <div>
            <div className="loginsection">
                <div className="blogsname">Blogs!</div>
                <div>Public your passion,your way...</div>
                <hr />
                <div className="registername">Login</div>
                <label>Email</label><br />
                <input type="email" placeholder="test@gmail.com"  className="inputfielddata" /><br />
                <label>Password</label><br />
                <input type="password" placeholder="password"  className="inputfielddata" /><br />
                <button className="loginbutton">Login</button>
            </div>

        </div>
    );
}export default Login;