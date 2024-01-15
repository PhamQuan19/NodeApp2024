// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxeHYce-8lgdMSKW6nxLXCDDQEAAIpHsY",
  authDomain: "note-app-e3934.firebaseapp.com",
  projectId: "note-app-e3934",
  storageBucket: "note-app-e3934.appspot.com",
  messagingSenderId: "109097584554",
  appId: "1:109097584554:web:c07982e76ad74f61bf0dd3",
  measurementId: "G-B4NMZ4C2TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);