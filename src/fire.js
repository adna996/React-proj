import firebase from 'firebase';

//database
var firebaseConfig = {
    apiKey: "AIzaSyBxgHr_sPk66iiU4zCKnuwAyC1fWfPAVD0",
    authDomain: "dws-projekat.firebaseapp.com",
    databaseURL: "https://dws-projekat.firebaseio.com",
    projectId: "dws-projekat",
    storageBucket: "dws-projekat.appspot.com",
    messagingSenderId: "158746300481",
    appId: "1:158746300481:web:cff8ef7c7bc55336ce36c0",
    measurementId: "G-J00GYL9LPM"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
