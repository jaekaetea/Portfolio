$( document ).ready(function() {

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBsEKj1e4bOeHJ9EbH76isPzybHvgtDN3w",
    authDomain: "portfolio-abb7f.firebaseapp.com",
    databaseURL: "https://portfolio-abb7f.firebaseio.com",
    projectId: "portfolio-abb7f",
    storageBucket: "",
    messagingSenderId: "76361269853",
    appId: "1:76361269853:web:2b86f2671c7945eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#submit").on("click", function(event) {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    var comment = $("#comment-input").val().trim();

    var newComment = {
            name: name,
            email: email,
            comment: comment
    };

    database.ref().push(newComment);

    $("#name-input").val("");
    $("#email-input").val("");
    $("#comment-input").val("");

    alert("Your Message Has Been Sent!");
});


$("#Cats").click(function() {
    $("#profile").attr("src", "assets/images/4.png");
    $("#About").scrollIntoView();
});


});