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
var messagesRef = firebase.database().ref('Users');

messagesRef.on('value', getData);

var arr = []

function getData(data){
  var scorelist = data.val();
  var keys = Object.keys(scorelist);
  for(var i = 0; i < keys.length; i++){
    var k = keys[i];
    var username = scorelist[k].username;
    var time = scorelist[k].score;
    var li = document.createElement('li', (username + ": " + time + "\n"));
    jQuery(li).parent('scorelist');
    console.log(username + ": " + time + "\n");
    arr[i] = (username + ": " + time + "\n")
    document.write(username + ": " + time + "\n");
  }
}

  var list = function(arr) {
  for (var prop in arr) {
    document.getElementById('scorelist').innerHTML += '<li>' + prop + '</li>';
    console.log(prop);
  }
}