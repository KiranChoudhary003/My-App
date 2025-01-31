import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyDbbdGp0p19Bx5RxFWzZ2BP_ADzNnh3dU0",
    authDomain: "mayur-app-77f32.firebaseapp.com",
    projectId: "mayur-app-77f32",
    storageBucket: "mayur-app-77f32.firebasestorage.app",
    messagingSenderId: "114595171096",
    appId: "1:114595171096:web:67e945996857ea0debac6d",
    measurementId: "G-M8ZM87JKMG"
  };
  export const app = initializeApp(firebaseConfig);
export let messaging = typeof window !== "undefined" ? getMessaging(app) : null;
if (typeof window !== 'undefined'){
  // because I'm getting error "Navigator not defined"
  messaging = getMessaging(app);
}
export const VAPID_KEY = "BEAZUJPW17IZgn5Cp-61Q-xV15_tNCtNSjYWW0V6U_FjF_HwWoOLsISfTmroLiyTxHruOooDOdpe0rA5Pq9oDvI"