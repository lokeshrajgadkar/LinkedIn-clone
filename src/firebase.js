import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlT3Jc1MJiA8M2cFhK409ml_OqFi90fg0",
    authDomain: "linkedin-clone-e9e4e.firebaseapp.com",
    projectId: "linkedin-clone-e9e4e",
    storageBucket: "linkedin-clone-e9e4e.appspot.com",
    messagingSenderId: "241958730918",
    appId: "1:241958730918:web:122a13335766dd62b10867",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};