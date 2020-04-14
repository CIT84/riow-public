import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: key,
    authDomain: "cit94-1517426142976.firebaseapp.com",
    databaseURL: "https://cit94-1517426142976.firebaseio.com",
    projectId: "cit94-1517426142976",
    storageBucket: "cit94-1517426142976.appspot.com",
    messagingSenderId: "191899474692",
    appId: "1:191899474692:web:1e15dd482c16e6ebe64e51"
  };

  
  firebase.initializeApp(firebaseConfig)

  export default firebase