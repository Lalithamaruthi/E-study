const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyANLliQV1dSY3tcSAWtknVRx7S_wN8rNRM",
  authDomain: "study-login-79e64.firebaseapp.com",
  projectId: "study-login-79e64",
  storageBucket: "study-login-79e64.appspot.com",
  messagingSenderId: "693569700955",
  appId: "1:693569700955:web:44fec29bd1fd5584466b7e",
//   measurementId: "G-P2H8BLQNB7"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp=()=>{
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
console.log(email , password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
   document.write("successful signed up");
   console.log(result);
   window.location.replace("./explore.html.html");
   
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    //document.write("failed")
    alert("The account alread exist ")
  
  });
}

const signIn=()=>{
    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    //document.write("successful signed in")
    console.log(result)
    alert("Successfully signed in")
    window.location.replace("./explore.html ");
    
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    alert("Wrong password")
    window.location.replace("./home.html ");
  });
}