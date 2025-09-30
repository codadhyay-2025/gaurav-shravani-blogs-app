import "./Register.css";
function Register() {
    return (
        <div>
            <div className="registersection">
                <div className="blogsname">Blogs!</div>
                <div>Public your passion,your way...</div>
                <hr />
                <div className="registername">Register</div>
                <label>Name</label><br />
                <input type="text" placeholder="Firstname Lastname"  className="inputfielddata"/><br />
                <label>Email</label><br />
                <input type="email" placeholder="test@gmail.com"  className="inputfielddata" /><br />
                <label>Password</label><br />
                <input type="password" placeholder="password"  className="inputfielddata" /><br />
                <button className="registerbutton">Register</button>
            </div>
        </div>
    );
} export default Register;