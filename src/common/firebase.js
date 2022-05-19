import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/messaging'
import { envValues } from 'utils/env'

const devFirebaseConfig = {
  apiKey: 'AIzaSyAo6efOuVHyiaI-3ladh_TEvuCcGi2gS2A',
  authDomain: 'smartschool-62e80.firebaseapp.com',
  projectId: 'smartschool-62e80',
  storageBucket: 'smartschool-62e80.appspot.com',
  messagingSenderId: '578743603219',
  appId: '1:578743603219:web:f895f347b8fe67f1bcefe6',
}

const prodFirebaseConfig = {
  apiKey: 'AIzaSyD8JCJ64aTrOj97sv4a7zeYxq20vwhl0DU',
  authDomain: 'smartschool-prod.web.app',
  projectId: 'smartschool-prod',
  storageBucket: 'smartschool-prod.appspot.com',
  messagingSenderId: '788192932230',
  appId: '1:788192932230:web:7576fd9945d39803037c07',
}
// Initialize Firebase
const firebaseCore = firebase.initializeApp(envValues(prodFirebaseConfig, devFirebaseConfig))
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const messaging = firebase.messaging()

export const PUBLIC_VAPID_KEY = envValues(
  'BPTPSm7EsKFBEF2WKPsfMe7xw0P2i2Mp4DpcoLAruYXKemv9yxz6LM9DRc0FdKax-h6xQDIJZ28FvVTJ1s8aEgs',
  'BFoA1D78_yvpKpfFQ5JyhjCg6xmEc-GERKoPjPLtVMiUNyzPPPMgV8ccS7hXqcx6hAfv4tzk-wwAiRugwLWAY44',
)

export default firebaseCore
