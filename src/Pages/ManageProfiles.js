import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ManageProfiles = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/home'); 
    };

    return (
        <div style={{textAlign: 'center'}}>
            <div className="profile-container">
           <div className='profile_card' onClick={handleLoginClick}>
                <img src='../../assets/logos/profile1.png'/>
                <p>profile1</p>
           </div>
           <div className='profile_card' onClick={handleLoginClick}>
                <img src='../../assets/logos/profile2.png'/>
                <p>profile2</p>
           </div>
           <div className='profile_card' onClick={handleLoginClick}>
                <img src='../../assets/logos/profile3.png'/>
                <p>profile3</p>
           </div>

           
        </div>
        <button className='mBtn'>Manage Profiles</button>
        </div>
    );
};

export default ManageProfiles;
