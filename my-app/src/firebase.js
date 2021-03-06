import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp(
    {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: "delsurwines-ecommerce.firebaseapp.com",
        projectId: "delsurwines-ecommerce",
        storageBucket: "delsurwines-ecommerce.appspot.com",
        messagingSenderId: "189843702702",
        appId: "1:189843702702:web:d0e06a1cd778c6635d3e3f"
      }
)

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)