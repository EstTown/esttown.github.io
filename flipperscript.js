function flipper() {
	var card = document.querySelector('#innercontent');
	var btn = document.querySelector('#flipperspan')
	card.classList.toggle('flipped');
	
	if (btn.innerText=="About me") btn.innerText = "Back to Projects";
    else btn.innerText = "About me"
}