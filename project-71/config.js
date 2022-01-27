import firebase from 'firebase'


const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyCzL7mGrojwC-yvIPdz4qcFuYGURs8qva4",
  authDomain: "project-71-93053.firebaseapp.com",
  projectId: "project-71-93053",
  storageBucket: "project-71-93053.appspot.com",
  messagingSenderId: "823259595348",
  appId: "1:823259595348:web:36d1503f291c5d466de3c1"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()