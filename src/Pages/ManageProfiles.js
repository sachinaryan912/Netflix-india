// src/ManageProfiles.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ref, get } from 'firebase/database'; // Import Firebase methods
import { db } from '../Database/firebaseConfig'; // Import your Firebase configuration

const ManageProfiles = () => {
    const [profiles, setProfiles] = useState([]); // State to store profiles
    const navigate = useNavigate();
    // Fetch profiles from Firebase Realtime Database
    useEffect(() => {
        const fetchProfiles = async () => {
            const userId = localStorage.getItem('userId'); // Replace with your current user's UID
            const profilesRef = ref(db, `users/${userId}/profiles`);
            try {
                const snapshot = await get(profilesRef);
                if (snapshot.exists()) {
                    const profileData = snapshot.val();
                    setProfiles(profileData); // Set fetched profiles in state
                } else {
                    console.log("No profiles found");
                }
            } catch (error) {
                console.error("Error fetching profiles:", error);
            }
        };

        fetchProfiles();
    }, []);

    const handleProfileClick = (profile) => {
        navigate('/home', { state: { activeProfile: profile } }); // Pass profile info to home
    };

    return (
        <div className='prf-parent'>
            <h1>Who's watching?</h1>
           
            <div className="profile-container">
                {/* Dynamically display profiles from Firebase */}
                {profiles.length > 0 ? (
                    profiles.map((profile, index) => (
                        <div className='profile_card' key={index} onClick={() => handleProfileClick(profile)}>
                            <img src={profile.image} alt={profile.name} />
                            <p>{profile.name}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading profiles...</p>
                )}
            </div>
            <button className='mBtn'>Manage Profiles</button>
        </div>
    );
};

export default ManageProfiles;
