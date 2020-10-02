function toggle() {
	var element = document.body;
	element.classList.toggle("dark-theme");
}

function topnav_responsive() {
	var x = document.getElementById("navbar");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}