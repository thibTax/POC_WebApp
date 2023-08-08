// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  
  apiKey: "AIzaSyAxsIOu0trroGcktxmKSEA03YsS6RqbSw0",
  authDomain: "car-bones.firebaseapp.com",
  projectId: "car-bones",
  storageBucket: "car-bones.appspot.com",
  messagingSenderId: "1017119946706",
  appId: "1:1017119946706:web:32c1c88d17efa387feba0b",
  measurementId: "G-6BTYCE7YFF"
};

// Initialisez Firebase avec la configuration
const app = initializeApp(firebaseConfig);

// Exportez les instances d'authentification et de Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);


