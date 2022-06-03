import * as firebase from "firebase";
// import { getAuth } from 'firebase/auth';
// import { initializeApp } from "firebase/app";
const firebaseConfig = {
    
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