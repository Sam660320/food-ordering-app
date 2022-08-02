import * as firebase from "firebase";
// import { getAuth } from 'firebase/auth';
// import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCHVAldmKfQdaxp9IY8L1MQtJgabXMWYSs",
  authDomain: "food-ordering-app-351401.firebaseapp.com",
  projectId: "food-ordering-app-351401",
  storageBucket: "food-ordering-app-351401.appspot.com",
  messagingSenderId: "24063568883",
  appId: "1:24063568883:web:3fd1eece25867b7effc086"

};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
export default firebase;