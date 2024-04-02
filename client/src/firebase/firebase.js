// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfd0hsP6eyE0EnYemYOgUCGi8EyKLwxYk",
  authDomain: "evmax-97c93.firebaseapp.com",
  projectId: "evmax-97c93",
  storageBucket: "evmax-97c93.appspot.com",
  messagingSenderId: "123735603122",
  appId: "1:123735603122:web:6b7aa152801030bd8a16ab",
  measurementId: "G-VL28K24ZQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
