import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCgl35KqMrjS69c4QS70takgOIm3sGoI7I',
  authDomain: 'my-ecom-691fd.firebaseapp.com',
  projectId: 'my-ecom-691fd',
  storageBucket: 'my-ecom-691fd.appspot.com',
  messagingSenderId: '51214229424',
  appId: '1:51214229424:web:2ead993bbe773f3c6b8075',
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth, fireDB };
