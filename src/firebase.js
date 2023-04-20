import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: 'AIzaSyAmrbiCM74foNYaFs3_RmQD4R0OFWYuRyQ',
  authDomain: 'agon-auth-36274.firebaseapp.com',
  projectId: 'agon-auth-36274',
  storageBucket: 'agon-auth-36274.appspot.com',
  messagingSenderId: '170899528255',
  appId: '1:170899528255:web:2cff2d87e5e9b4e29a768a',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
