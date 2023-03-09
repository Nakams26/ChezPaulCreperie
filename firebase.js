// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAylJLUcOi8WTnwSEUh47RuUVcaBJrriDs",

  authDomain: "chez-paul-f109d.firebaseapp.com",

  projectId: "chez-paul-f109d",

  storageBucket: "chez-paul-f109d.appspot.com",

  messagingSenderId: "978613581580",

  appId: "1:978613581580:web:05fffa9d4f536e160ffb29",

  measurementId: "G-1H93PJ1Q6G"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
