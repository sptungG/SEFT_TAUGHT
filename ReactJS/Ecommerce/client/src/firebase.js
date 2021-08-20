// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";

// firebase config
const config = {
  apiKey: "AIzaSyCIOMjE6W2NqzqynRHUV64Vgx87lvlAwgY",
  authDomain: "ecommerce-01-c4336.firebaseapp.com",
  projectId: "ecommerce-01-c4336",
  storageBucket: "ecommerce-01-c4336.appspot.com",
  messagingSenderId: "755436155092",
  appId: "1:755436155092:web:c182bae47fc755a3070b41",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/*
UPDATE on Firebase Import
A new version of firebase (version 8) has bee released and with the newer version,
there is a slight difference on how to import firebase and use in your react app.

In the next lesson, if you come across any firebase import error, use the code below. 
This is the standard way to import firebase with newer version
*/