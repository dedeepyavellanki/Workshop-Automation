import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {
    let {loginUserStatus,currentUser} = useSelector(state=>state.workshopManagementLoginReducer)
    let navigate = useNavigate();
    let phn = currentUser.phonenumber;
    if(phn == undefined) phn = currentUser.phone
    if(phn == undefined) phn = "0000000000"
    const manage = ()=>{
        navigate('/admin/profile/manage-password');
    }
    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>Profile</h1>
                <div className="profile-info">
                    <p><strong>Admin Name:</strong> {currentUser.username}</p>
                    <p><strong>Admin ID:</strong> {currentUser.facultyId}</p>
                    <p><strong>Email:</strong> {currentUser.email}</p>
                    <p><strong>Phone Number:</strong> {phn}</p>
                </div>
                <button className="manage-password-button" onClick={manage}>Manage Password</button>
            </div>
        </div>
    )
}

export default Profile;
