playButton = document.getElementById("play");
slimeEmbed = document.getElementById("slimeslayer");
apocEmbed = document.getElementById("apocclicker");
TWOASEmbed = document.getElementById("TWOAS");
gameSelect = document.getElementById("gameSelect");

miniSelect = document.getElementById("miniSelect");
miniButton = document.getElementById("goto");

slimeFrame = document.getElementById("slimeFrame");
slimeFrame.src = "";

TWOASFrame = document.getElementById("TWOASFrame");
TWOASFrame.src = "";

console.log("playButton: " + playButton);
console.log("slimeEmbed: " + slimeEmbed);
console.log("apocEmbed: " + apocEmbed);
console.log("gameSelect: " + gameSelect);

playButton.addEventListener("click", selectGame);
miniButton.addEventListener("click", selectMini);

function playSlime() {
	slimeFrame.src = "https://itch.io/embed-upload/7358114?color=132E32";
	slimeEmbed.style.display = "block";
	TWOASEmbed.style.display = "none";
	apocEmbed.style.display = "none";
	TWOASFrame.src = "";
}

function playApoc() {
	slimeFrame.src = "";
	TWOASFrame.src = "";
	slimeEmbed.style.display = "none";
	TWOASEmbed.style.display = "none";
	apocEmbed.style.display = "block";
}

function playTWOAS() {
	TWOASFrame.src = "https://scratch.mit.edu/projects/769287939/embed";
	TWOASEmbed.style.display = "block";
	slimeFrame.src = "";
	slimeEmbed.style.display = "none";
	apocEmbed.style.display = "none";
}

function selectGame() {
	console.log("selectGame() called");
	event.preventDefault();
	if (gameSelect.value == "slime") {
		playSlime();
	} else if (gameSelect.value == "apoc") {
		playApoc();
	} else if (gameSelect.value == "TWOAS") {
		playTWOAS();
	}
}

function selectMini() {
	if (miniSelect.value == "dice") {
		window.open(
			"https://github.com/AstralTurtle/AssortedDiceRollers",
			"_blank"
		);
	} else if ((miniSelect.value = "p5Timer")) {
		window.open("https://astralturtle.github.io/LoopedTimer/", "_blank");
	}
}
