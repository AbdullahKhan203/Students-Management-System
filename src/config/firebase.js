// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore/lite";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB5kjpJnhJmTQ_btFQMUKkUzkUcVut-SXI",
//   authDomain: "stickywall203.firebaseapp.com",
//   projectId: "stickywall203",
//   storageBucket: "stickywall203.appspot.com",
//   messagingSenderId: "584059966548",
//   appId: "1:584059966548:web:c8c539fd40da574e6189c1",
//   measurementId: "G-KXZKXJTK61"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
// const firestore = getFirestore(app);

// export {analytics,firestore}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBryfSmegIsHhEjFBcInrYG_2dVZhFs9lQ",
  authDomain: "todoapplication-204.firebaseapp.com",
  projectId: "todoapplication-204",
  storageBucket: "todoapplication-204.appspot.com",
  messagingSenderId: "323786524303",
  appId: "1:323786524303:web:2200435856931909f012fa",
  measurementId: "G-9Q0T0EC21F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export  {analytics,firestore}