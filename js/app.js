// alert("hello") connected 


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3snNoC54EStD2ftbTHChLMwtJuBW3ZKk",
    authDomain: "train-scheduler-44be9.firebaseapp.com",
    databaseURL: "https://train-scheduler-44be9.firebaseio.com",
    projectId: "train-scheduler-44be9",
    storageBucket: "train-scheduler-44be9.appspot.com",
    messagingSenderId: "1069884267137"
};

firebase.initializeApp(config);

// var firebase = firebase.database();

// sending information to firebase
// var trainName = "";
// var destination = "";
// var firstTrainTime = 0;
// var frequency = 0;

$("#addUser").on("click",function(e){
    e.preventDefault();
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrainTime = $("#trainTimeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();
        
    var trainObject = {

        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency

    } 
    console.log(trainObject.trainName)
    firebase.database().ref().push(trainObject)
})

// pseudocode missing codes -------
// display firebase data into HTML page 
// figure out how to include moment.js to app 
