function libIt() {
	var storyDiv = document.getElementById('story')

	var name = document.getElementById('yourName').value
	var adjective1 = document.getElementById('adjective1').value
	var adjective2 = document.getElementById('adjective2').value
	var noun1 = document.getElementById('noun1').value
	var verb = document.getElementById('verb').value
	var noun2 = document.getElementById('noun2').value
	var noun3 = document.getElementById('noun3').value
	var liquid = document.getElementById('liquid').value
	var mood = document.getElementById('mood').value
	var noun4 = document.getElementById('noun4').value
	var adjective3 = document.getElementById('adjective3').value

	storyDiv.innerHTML =
		'Hello,' +
		'<br>' +
		'my name is ' +
		name +
		',' +
		'<br>' +
		'I enjoy long,' +
		adjective1 +
		' ' +
		adjective2 +
		'walks on the ' +
		noun1 +
		'. ' +
		'Getting ' +
		verb +
		' by a ' +
		noun2 +
		', and encounters with ' +
		noun3 +
		'.' +
		'<br>' +
		'I really like ' +
		liquid +
		' mixed with a good amount of ' +
		mood +
		', and expensive, candle-lit ' +
		adjective3 +
		' ' +
		noun4 +
		'<br>' +
		'....Ladies.'
}
