// LOGIN FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvxvepqtZMLwYgQ1gUFMzo1zM0FgxpGDU",
    authDomain: "asg2-1cdee.firebaseapp.com",
    databaseURL: "https://asg2-1cdee-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "asg2-1cdee",
    storageBucket: "asg2-1cdee.appspot.com",
    messagingSenderId: "649820873310",
    appId: "1:649820873310:web:5d3a79c0958cc0c494cacf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//For Realtime database
import {
    //determine which services you want to use
    getDatabase, ref, set, get, onValue, push, child, update, remove
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//For Auth
import {
    //determine which services you want to use
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const db = getDatabase();
const playerRef = ref(db, "players");

/*//GetPlayerData();
function getPlayerData() {
    //const playerRef = ref(db, "players");
    //PlayerRef is declared at the top using a constant
    //get(child(db,`players/`))
    get(playerRef)
        .then((snapshot) => {//retrieve a snapshot of the data using a callback
            try {
                //let's do something about it
                let playerContent = document.getElementById("player-content");
                let content = "";

                snapshot.forEach((childSnapshot) => {
                    //looping through each snapshot
                    console.log("User key: " + childSnapshot.key);
                    console.log("Email: " + childSnapshot.child("email").val());
                    content += `<tr>
                <td>${childSnapshot.child("active").val()}</td>
                //======= insert your own place to update UI
                </tr>`;
                });
                //update our table content
                playerContent.innerHTML = content;
            } catch (error) {
                console.log("Error getPlayerData" + error);
            }
        });
}//End GetPlayerData */

//Working with Auth
const auth = getAuth();
//retrieve element from form
var frmCreateUser = document.getElementById("frmCreateUser");
//we create a button listener to listen when someone clicks
frmCreateUser.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    createUser(email, password);
    console.log("email" + email + "password" + password);
});
//create a new user based on email n password into Auth service
//user will get signed in
//userCredential is an object that gets
function createUser(email, password) {
    console.log("creating the user");
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signedin
            const user = userCredential.user;
            console.log("created user ... " + JSON.stringify(userCredential));
            console.log("User is now signed in ");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
        });
}