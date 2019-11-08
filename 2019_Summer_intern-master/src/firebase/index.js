import firebase from "firebase/app";
import "firebase/storage";

////
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCIL-4J2NxUDkV4zJAyeTiAbJOaImhL3Kw",
  authDomain: "photosharing-7553c.firebaseapp.com",
  databaseURL: "https://photosharing-7553c.firebaseio.com",
  projectId: "photosharing-7553c",
  storageBucket: "photosharing-7553c.appspot.com",
  messagingSenderId: "867702019316",
  appId: "1:867702019316:web:d61839dcc66c11cde6baa1",
  measurementId: "G-5H33N5DCLW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();


export {
    storage, firebase as default
}
