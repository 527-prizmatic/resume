function myFunction() {
	document.getElementById("main-info").fadeOut(1000, pok());
}

function pok() {
	document.getElementById("main-info").innerHTML = "pavouka";
	document.getElementById("main-info").fadeIn(1000);
}
