// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC24_9-7zD799iz9OFOEozJpzEnJzbRblE',
  authDomain: 'fir-444bd.firebaseapp.com',
  projectId: 'fir-444bd',
  storageBucket: 'fir-444bd.appspot.com',
  messagingSenderId: '1042601639370',
  appId: '1:1042601639370:web:c69d8d12a29008c1196333'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;
