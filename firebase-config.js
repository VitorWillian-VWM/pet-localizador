// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcR5PoqRjq8quENy6rrmDTdf6h5H3u5hA",
  authDomain: "fe-tec-agenda.firebaseapp.com",
  projectId: "fe-tec-agenda",
  storageBucket: "fe-tec-agenda.firebasestorage.app",
  messagingSenderId: "229857022065",
  appId: "1:229857022065:web:6e16f3801acc2cfa780bd0"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();

// Auth
const auth = firebase.auth();