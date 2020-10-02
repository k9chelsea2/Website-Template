function topnav_responsive() {
	var x = document.getElementById("navbar");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
};

const toggleColorMode = e => {
	if (e.currentTarget.classList.contains("light--hidden")) {
		document.documentElement.setAttribute("color-mode", "light");
		localStorage.setItem("color-mode", "light");
		return;
	}
	document.documentElement.setAttribute("color-mode", "dark");
	localStorage.setItem("color-mode", "dark");
};

const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

toggleColorButtons.forEach(btn => {
	btn.addEventListener("click", toggleColorMode);
});