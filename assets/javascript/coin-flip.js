let coinButton = document.getElementById("coinButton");
let coinArea = document.getElementById("coinArea");
let resultArea = document.getElementById("resultArea");

function coinFlip() {
	coinButton.addEventListener("click", function() {
		let flip = Math.floor(Math.random() * 2);
		if (flip == 1) {
            resultArea.innerHTML = "Heads!";
            coinArea.classList.add("heads");
            coinArea.classList.remove('tails')

		} else {
            resultArea.innerHTML = "Tails!";
            coinArea.classList.add("tails");
            coinArea.classList.remove("heads");

            
		}
	});
}
coinFlip();
