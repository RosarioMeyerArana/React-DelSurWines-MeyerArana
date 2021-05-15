import firebase from 'firebase/firebase-app'
import 'firebase/firestore'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyC_Zhzr7IkTTciOyprpE-PNsc7OJb6FKr8",
        authDomain: "delsurwines-ecommerce.firebaseapp.com",
        projectId: "delsurwines-ecommerce",
        storageBucket: "delsurwines-ecommerce.appspot.com",
        messagingSenderId: "189843702702",
        appId: "1:189843702702:web:d0e06a1cd778c6635d3e3f"
      }
)

export const getFirebase = () => {
    
}