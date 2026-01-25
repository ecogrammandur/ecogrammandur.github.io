// --- IMPORT FIREBASE ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- CONFIGURATION ---
const firebaseConfig = {
    apiKey: "AIzaSyARHvXnoIZxM-ODOf1qDFbOEptPbJQBDtQ",
    authDomain: "ecogrampanchayatmandur.firebaseapp.com",
    projectId: "ecogrampanchayatmandur",
    storageBucket: "ecogrampanchayatmandur.firebasestorage.app",
    messagingSenderId: "474255490054",
    appId: "1:474255490054:web:f0a1ed7fdb51fd339c5787"
};

// --- INITIALIZE ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- THE GATEKEEPER (Prevents Direct Link Access) ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        // 1. User IS logged in -> Show the page
        // (We assume the body is hidden by CSS initially to prevent blinking)
        document.body.style.display = 'block';
    } else {
        // 2. User is NOT logged in -> Kick them out immediately
        window.location.replace("index.html");
    }
});

// --- YOUR EXISTING UI PROTECTION (Disable Right Click / F12) ---

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    // Disable F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+Shift+I (Inspector)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
    }
});