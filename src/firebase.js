// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz_BNK_o3VV5hqfFfoRUYE2MRqf_9OnkQ",
  authDomain: "news-a7f4d.firebaseapp.com",
  projectId: "news-a7f4d",
  storageBucket: "news-a7f4d.appspot.com",
  messagingSenderId: "718169986744",
  appId: "1:718169986744:web:0689c2516424823f8a864d",
  measurementId: "G-D7030G9NBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}