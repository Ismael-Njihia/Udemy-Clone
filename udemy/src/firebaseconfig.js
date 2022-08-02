import React from "react";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhyPYMlCayfLiI1cdmhWr_dOUmv-l0UC4",
  authDomain: "udemy-clone-latest.firebaseapp.com",
  projectId: "udemy-clone-latest",
  storageBucket: "udemy-clone-latest.appspot.com",
  messagingSenderId: "19016629453",
  appId: "1:19016629453:web:de93f5f5eff722d56afd84",
  measurementId: "G-SY3KFFD9WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);