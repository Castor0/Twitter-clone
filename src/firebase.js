import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZzcv3aCYSDhQTA-_e6vSjL4QXLprgcQM",
  authDomain: "twitter-clone-cfa03.firebaseapp.com",
  projectId: "twitter-clone-cfa03",
  storageBucket: "twitter-clone-cfa03.appspot.com",
  messagingSenderId: "7530465539",
  appId: "1:7530465539:web:9c302110431aee7b508136",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
