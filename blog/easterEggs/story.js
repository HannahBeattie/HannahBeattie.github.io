function libIt() {
	var storyDiv = document.getElementById('story')

	var name = document.getElementById('yourName').value
	var adjective = document.getElementById('adjective').value
	var verb = document.getElementById('verb').value
	var adjective2 = document.getElementById('adjective2').value
	var noun = document.getElementById('noun').value
	var liquid = document.getElementById('liquid').value
	var noun2 = document.getElementById('noun2').value
	var adjective3 = document.getElementById('adjective3').value
	storyDiv.innerHTML =
		'Hello, my name is ' +
		name +
		', ' +
		'<br>' +
		'I enjoy long, ' +
		adjective +
		' walks on the beach, getting ' +
		verb +
		' in the rain and ' +
		adjective2 +
		' encounters with ' +
		noun +
		'. I really like ' +
		liquid +
		' mixed with ' +
		noun2 +
		', and romantic, candle-lit ' +
		adjective3 +
		's.'
}
