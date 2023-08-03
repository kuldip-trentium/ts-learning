// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCE0KwzJRBvFIuWolN0zHoqK3FbhFZyDzU',
  authDomain: 'crud-with-login.firebaseapp.com',
  projectId: 'crud-with-login',
  storageBucket: 'crud-with-login.appspot.com',
  messagingSenderId: '745627996109',
  appId: '1:745627996109:web:95ba0c211fdaef79f27e84',
  measurementId: 'G-VQY5TQCL61',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
