import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_Qa4q1Y0f76yq6wR5-rYkXLuhuTq3IqM",
  authDomain: "space-explorer-blog.firebaseapp.com",
  projectId: "space-explorer-blog",
  storageBucket: "space-explorer-blog.firebasestorage.app",
  messagingSenderId: "753191444149",
  appId: "1:753191444149:web:36adae990d433fa61868fc",
  measurementId: "G-7FKY5P3C32"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
