import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk53GOKt7hIZhzUA43X0nKkb-bIAheNS0",
  authDomain: "inventory-management-app-65153.firebaseapp.com",
  projectId: "inventory-management-app-65153",
  storageBucket: "inventory-management-app-65153.appspot.com",
  messagingSenderId: "357781458269",
  appId: "1:357781458269:web:5821bea1684e15f1d1acb4",
  measurementId: "G-C7XHG7R6SH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);