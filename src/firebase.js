import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRvxueG2vnnKDOoOVWJfcRckiQYx4hfrQ",
    authDomain: "disney-plus-clone-721cc.firebaseapp.com",
    projectId: "disney-plus-clone-721cc",
    storageBucket: "disney-plus-clone-721cc.appspot.com",
    messagingSenderId: "1078635317432",
    appId: "1:1078635317432:web:c3858154b45ef0dd6c8c4d"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default dbConfig;
