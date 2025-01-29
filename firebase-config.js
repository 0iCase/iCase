// Firebase SDK importieren
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🚀 Firebase Konfiguration (deine echten Werte)
const firebaseConfig = {
  apiKey: "AIzaSyCG4JM5gmUoVI5YBec_qyLxxBpBH_-Ot2Y",
  authDomain: "icase-fdea6.firebaseapp.com",
  databaseURL: "https://icase-fdea6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "icase-fdea6",
  storageBucket: "icase-fdea6.appspot.com",
  messagingSenderId: "638294554146",
  appId: "1:638294554146:web:f6e778961da6ca0d107c7b",
  measurementId: "G-SS984DD5JC"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Datenbank aktivieren

// Funktionen exportieren, damit wir Firebase in anderen Dateien nutzen können
export { db, ref, set, push, onValue };
