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
var trainName = "";
var destination = "";
var firstTrainTime = "0";
var frequency = "0";

$("#addUser").on("click",function(){
    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    firstTrainTime = $("#trainTimeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();

    firebase.database().ref().set({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,

    })
})