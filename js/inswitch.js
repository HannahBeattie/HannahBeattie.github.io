const cats = [
	'/images/kittyswitch/kitty0.png',
	'/images/kittyswitch/kitty1.png',
	//'/images/kittyswitch/kitty2.png',
	//'/images/kittyswitch/kitty3.png',
	'/images/kittyswitch/kitty4.png',
	'/images/kittyswitch/kitty5.png',
]

let whichCat = 0

function nextCat() {
	whichCat++
	const next = whichCat % cats.length
	return cats[next]
}

function change() {
	const img = document.getElementById('myimg')
	img.src = nextCat()
}
