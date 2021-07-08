import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database

//firebase config over here
const config = {
  apiKey: "AIzaSyBCzhDnUbusKZu6zO-iM-6X4V3vUdoGKDc",
  authDomain: "netflix-f48b4.firebaseapp.com",
  projectId: "netflix-f48b4",
  storageBucket: "netflix-f48b4.appspot.com",
  messagingSenderId: "256952830480",
  appId: "1:256952830480:web:4b419af4a228e1172bd895",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
