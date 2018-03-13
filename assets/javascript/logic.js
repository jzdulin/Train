//Firebase
var config = {
    apiKey: "AIzaSyA4zp-3sHM0EPEIkCSYv6JOvKrDuY1fXE8",
    authDomain: "trains-49e61.firebaseapp.com",
    databaseURL: "https://trains-49e61.firebaseio.com",
    projectId: "trains-49e61",
    storageBucket: "trains-49e61.appspot.com",
    messagingSenderId: "389899048009"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Adding new trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFirst = $("#first-train-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
    //var trainFirst = moment($("#first-train-input").val().trim(), "DD/MM/YY").format("X");
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      first: trainFirst,
      frequency: trainFrequency
    };
  
    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);
  
    // Alert
    alert("train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");
  });
