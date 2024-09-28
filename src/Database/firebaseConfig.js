// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAHKuUXK62rtUMHrfpcTvIUxGaHl1XJKOw",
    authDomain: "netflix-india-b8739.firebaseapp.com",
    projectId: "netflix-india-b8739",
    storageBucket: "netflix-india-b8739.appspot.com",
    messagingSenderId: "954250720691",
    appId: "1:954250720691:web:4ee38a97614f6be52d87c6",
    measurementId: "G-5474JF60T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);