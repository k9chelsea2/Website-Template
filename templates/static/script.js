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

document.getElementById('themeToggle').addEventListener('change', function(event) {
	(event.target.checked) ? document.body.setAttribute('data-theme', 'dark') :
document.body.removeAttribute('data-theme');
});