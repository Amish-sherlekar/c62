import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAMGqjpp4fMBM68XiNEa6spb0VVBJXOh94",
    authDomain: "school-attendance-app-acb26.firebaseapp.com",
    databaseURL: "https://school-attendance-app-acb26-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-acb26",
    storageBucket: "school-attendance-app-acb26.appspot.com",
    messagingSenderId: "813699863261",
    appId: "1:813699863261:web:d57d4a3a3c8cb630bb0134"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()