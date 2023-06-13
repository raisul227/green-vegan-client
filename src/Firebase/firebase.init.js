// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMzwcry-zNInfVG9vS6t7ZnYCLRPtcR1A",
    authDomain: "green-vegan-2.firebaseapp.com",
    projectId: "green-vegan-2",
    storageBucket: "green-vegan-2.appspot.com",
    messagingSenderId: "334108004612",
    appId: "1:334108004612:web:c136424888a2de8e2d4051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;