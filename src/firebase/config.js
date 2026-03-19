import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvPavqzcTzrK2iBRDk0gfoFvvR_7AQEv4",
  authDomain: "columbus-capital-cms.firebaseapp.com",
  projectId: "columbus-capital-cms",
  storageBucket: "columbus-capital-cms.firebasestorage.app",
  messagingSenderId: "527508333386",
  appId: "1:527508333386:web:36f9d77d2ccec4531117b3",
  measurementId: "G-ZSBSJTKV2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
