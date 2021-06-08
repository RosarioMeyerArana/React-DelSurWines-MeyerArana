import React, {useContext} from 'react'
import firebase from 'firebase/app'


export const LoginContext = React.createContext([])

export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({children}) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

    return (
        <LoginContext.Provider value={}>
            {children}
        </LoginContext.Provider>
    )
}
