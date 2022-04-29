import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9bWp-g0jTFw4KWTXhLdQu_WJJhYudZuk",
  authDomain: "ashex-ecommerce.firebaseapp.com",
  projectId: "ashex-ecommerce",
  storageBucket: "ashex-ecommerce.appspot.com",
  messagingSenderId: "996056721390",
  appId: "1:996056721390:web:8f9011c7a1fc69fedb90ff",
  measurementId: "G-43QTRYJ0FN"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}