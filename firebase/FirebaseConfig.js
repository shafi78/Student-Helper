import firebase from 'firebase/compat/app';
import auth from'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAL-MTQGolS39KAjMlenXn3v1IY0nl8Z60",
    authDomain: "student-c1cca.firebaseapp.com",
    projectId: "student-c1cca",
    storageBucket: "student-c1cca.appspot.com",
    messagingSenderId: "795493420922",
    appId: "1:795493420922:web:512dc73cd278b5e71a50c3",
    measurementId: "G-TN2M59EKQE"
  };


if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase,auth} ;