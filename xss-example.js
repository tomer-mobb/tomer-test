var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.textContent = "Hello to you, " + username + "!!!";
