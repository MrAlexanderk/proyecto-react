import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const [email, setEmail] = useState(localStorage.getItem("email") || null);
    const { token, logout } = useContext(UserContext);

    return (
        <>
            <div id="profile-page">
                <div className="profile-header">
                    <h2>Alejandro Magno</h2>
                    <hr />
                </div>
                
                <div className="profile-details d-flex flex-column justify-content-start gap-3">
                    <div className="d-flex width-25 gap-2 align-items-center">
                        <label htmlFor="username" className="m-0 profile-label">Username</label>
                        <input type="text" id="username" name="username" value={"@AleAleAlejandroMg"} readOnly className="user-info"/>
                    </div>
                    <div className="d-flex width-25 gap-2 align-items-center">
                        <label htmlFor="email" className="m-0 profile-label">Email</label>
                        <input type="email" id="email" name="email" value={email ? email : "No User"} readOnly className="user-info"/>
                    </div>

                </div>
                <br></br>
                <div className="d-flex justify-content-start flex-column width-25 gap-2">
                    <button>Edit Profile</button>
                    <button onClick={logout}>Log Out</button>
                </div>
            </div>
        </>

      )
}

export default Profile