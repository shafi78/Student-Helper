import firebase from 'firebase/compat/app';
import auth from'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    
  };


if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase,auth} ;
