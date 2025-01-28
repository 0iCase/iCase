import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 Firebase Konfiguration (hier deine Firebase-Daten einfügen!)
const firebaseConfig = {
  apiKey: "AIzaSyCG4JM5gmUoVI5YBec_qyLxxBpBH_-Ot2Y",
  authDomain: "icase-fdea6.firebaseapp.com",
  projectId: "icase-fdea6",
  storageBucket: "icase-fdea6.appspot.com",
  messagingSenderId: "638294554146",
  appId: "1:638294554146:web:f6e778961da6ca0d107c7b",
  measurementId: "G-SS984DD5JC"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Registrierung
export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registrierung erfolgreich!");
            console.log("Neuer Nutzer:", userCredential.user);
        })
        .catch((error) => {
            alert(error.message);
        });
}

// 🔹 Login
export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login erfolgreich!");
            console.log("Eingeloggt als:", userCredential.user);
        })
        .catch((error) => {
            alert(error.message);
        });
}

// 🔹 Logout
export function logoutUser() {
    signOut(auth)
        .then(() => {
            alert("Erfolgreich ausgeloggt!");
        })
        .catch((error) => {
            alert(error.message);
        });
}
