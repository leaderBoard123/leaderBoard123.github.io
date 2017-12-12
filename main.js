// Initialize Firebase (ADD YOUR OWN DATA)
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBf17vSw0ov3krg1a13x4ZPK2nnXAx43ww",
    authDomain: "leaderboard-2225f.firebaseapp.com",
    databaseURL: "https://leaderboard-2225f.firebaseio.com",
    projectId: "leaderboard-2225f",
    storageBucket: "leaderboard-2225f.appspot.com",
    messagingSenderId: "13229877992"
  };
  firebase.initializeApp(config);

// Reference messages collection
var userRef = firebase.database().ref('Users');


// Listen for form submit
document.getElementById('ScorePost').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var username = getInputVal('username');
  var score = getInputVal('score');

  // Save message
  saveScore(username, score);

  // Clear form for this
  document.getElementById('ScorePost').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveScore(username, score){
  var newUserRef = userRef.push();
  newUserRef.set({
    username: username,
    score:score,
  });
}



