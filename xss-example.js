var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username'); // bla

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello to you, " + username + "!!!!!!!";
