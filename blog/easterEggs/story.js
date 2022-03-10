console.log('javascript in the house')

function libIt() {
	var storyDiv = document.getElementById('story')
	var adjective = document.getElementById('adjective').value
	var verb = document.getElementById('verb').value
	var adjective2 = document.getElementById('adjective2').value
	var noun = document.getElementById('noun').value
	var liquid = document.getElementById('liquid').value
	var noun2 = document.getElementById('noun2').value
	var nationality = document.getElementById('nationality').value
	storyDiv.innerHTML =
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
		nationality +
		's.'
}
