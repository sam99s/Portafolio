import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBusjHa2RuErP60pmS5rsgzz5INb6gG3qE",
  authDomain: "portfolio-sam99s-1834f.firebaseapp.com",
  projectId: "portfolio-sam99s-1834f",
  storageBucket: "portfolio-sam99s-1834f.appspot.com",
  messagingSenderId: "609308446335",
  appId: "1:609308446335:web:68c545943ca67d55ccb94a"
};

if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };