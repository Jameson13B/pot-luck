import firebase from 'firebase'

// Copy config from Firebase Console
const config = {
  apiKey: 'AIzaSyAQTAmKpCTnyzDb_Xdn5QoKwf_8hrylbso',
  authDomain: 'pot-luck-9476d.firebaseapp.com',
  databaseURL: 'https://pot-luck-9476d.firebaseio.com',
  projectId: 'pot-luck-9476d',
  storageBucket: '',
  messagingSenderId: '808435717580',
  appId: '1:808435717580:web:de03d510aa69eaf3'
}

firebase.initializeApp(config)

// Authentication (providers and auth)
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

// Firestore database
export const db = firebase.firestore()

// Firestore date type
export const Timestamp = firebase.firestore.Timestamp

// Export firebase for misc
export default firebase
