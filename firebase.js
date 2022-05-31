import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHVAldmKfQdaxp9IY8L1MQtJgabXMWYSs",
    authDomain: "food-ordering-app-351401.firebaseapp.com",
    projectId: "food-ordering-app-351401",
    storageBucket: "food-ordering-app-351401.appspot.com",
    messagingSenderId: "24063568883",
    appId: "1:24063568883:web:3fd1eece25867b7effc086"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;