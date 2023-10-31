import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = { 
apiKey: "AIzaSyAKd3N7eduxmodrLL0B86k4ZMPQdeaWxZk", 
authDomain: "fast-search-43c81.firebaseapp.com", 
projectId: "fast-search-43c81", 
storageBucket: "fast-search-43c81.appspot.com", 
messagingSenderId: "996837638739", 
appId: "1:996837638739:web:57d5127ceaf4d66edf7ca6", 
measurementId: "G-KSV60F2GNK" 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
