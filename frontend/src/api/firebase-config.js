import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS2deOdmdeKhyQSVd-UEm-JCQCCA2ceRY",
  authDomain: "gotip-c6847.firebaseapp.com",
  projectId: "gotip-c6847",
  storageBucket: "gotip-c6847.appspot.com",
  messagingSenderId: "205713442819",
  appId: "1:205713442819:web:870d4fd32bd0e81ed02636",
  measurementId: "G-WQSQC2PVKD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
