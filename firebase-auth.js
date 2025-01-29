// Importiere Firebase-Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyCG4JM5gmUoVI5YBec_qyLxxBpBH_-Ot2Y",
  authDomain: "icase-fdea6.firebaseapp.com",
  projectId: "icase-fdea6",
  storageBucket: "icase-fdea6.appspot.com",
  messagingSenderId: "638294554146",
  appId: "1:638294554146:web:f6e778961da6ca0d107c7b"
};

// Initialisiere Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exportiere die Auth-Funktionen
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };

// Registrierungsfunktion
export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registrierung erfolgreich! Willkommen, " + userCredential.user.email);
            window.location.href = "index.html"; // Weiterleitung zur Startseite
        })
        .catch((error) => {
            console.error(error);
            alert("Fehler: " + error.message);
        });
}

// Login-Funktion
export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login erfolgreich! Willkommen zurück, " + userCredential.user.email);
            window.location.href = "index.html"; // Weiterleitung zur Startseite
        })
        .catch((error) => {
            console.error(error);
            alert("Fehler: " + error.message);
        });
}

// Logout-Funktion
export function logoutUser() {
    signOut(auth)
        .then(() => {
            alert("Erfolgreich ausgeloggt!");
            window.location.href = "login.html"; // Nach Logout zur Login-Seite
        })
        .catch((error) => {
            console.error(error);
            alert("Fehler: " + error.message);
        });
}
