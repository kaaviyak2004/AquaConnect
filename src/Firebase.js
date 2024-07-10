import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyClDGb8O47RTzNkASgtLyqKiuvIXvrgd3Y",
  authDomain: "aquaconnect-92cdc.firebaseapp.com",
  projectId: "aquaconnect-92cdc",
  storageBucket: "aquaconnect-92cdc.appspot.com",
  messagingSenderId: "639780934846",
  appId: "1:639780934846:web:5e32ac2ab1bfb4df6a3aef",
  measurementId: "G-3Z20HQYT9B"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase