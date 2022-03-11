function libIt() {
	var storyDiv = document.getElementById('story')

	var name = document.getElementById('yourName').value
	var adjective = document.getElementById('adjective').value
	var verb = document.getElementById('verb').value
	var adjective2 = document.getElementById('adjective2').value
	var noun = document.getElementById('noun').value
	var liquid = document.getElementById('liquid').value
	var noun2 = document.getElementById('noun2').value
	var noun3 = document.getElementById('noun3').value
	storyDiv.innerHTML =
		'Hello, my name is ' +
		name +
		', ' +
		'<br>' +
		'I enjoy long, firm, ' +
		adjective +
		' walks on the beach, getting ' +
		verb +
		' by a ' +
		adjective2 +
		', and encounters with ' +
		noun +
		'.' +
		'<br>' +
		'I really like ' +
		liquid +
		' mixed with a good amount of ' +
		noun2 +
		', and expensive, candle-lit ' +
		noun3 +
		's.'
}
