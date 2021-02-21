import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyBcrRD5sReM39curYFVUOcKALzYLWqkkWo",
  authDomain: "workout-tracker-cbd35.firebaseapp.com",
  projectId: "workout-tracker-cbd35",
  storageBucket: "workout-tracker-cbd35.appspot.com",
  messagingSenderId: "769577705584",
  appId: "1:769577705584:web:9776245a158edd134114b5",
  measurementId: "G-0ZHN68WE6E",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  /*** Authentication  ***/
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  /*** Database ***/
  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  addActivity = (uid, activity) => {
    const ref = this.db.ref().child(`users/${uid}/activities`);
    ref.push(activity);
  };

  updateActivity = (uid, activity, activityKey) => {
    const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
    ref.update(activity);
  };
}

export default Firebase;
