// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//an array of the clown head

const head = [
	'images/head0.png',
	'images/head1.png',
	'images/head2.png',
	'images/head3.png',
	'images/head4.png',
	'images/head5.png',
]

//a function that cycles through heads

let whichHead = 0
function nextHead() {
	whichHead++
	const next = whichHead % head.length
	return head[next]
}

//a function that initiates the switch between clown heads

function changeClownHead() {
	const img = document.getElementById('head')
	img.src = nextHead()
	console.log('Changed clown head to', img.src)
}

//an array of the clown body images

const body = [
	'images/body0.png',
	'images/body1.png',
	'images/body2.png',
	'images/body3.png',
	'images/body4.png',
	'images/body5.png',
]

//a function that cycles through bodies

let whichBody = 0
function nextBody() {
	whichBody++
	const next = whichBody % body.length
	return body[next]
}

//a function that initiates the switch between clown bodies

function changeClownBody() {
	const img = document.getElementById('body')
	img.src = nextBody()
	console.log('Changed clown body to', img.src)
}

//an array of the clown shoes images

const shoes = [
	'images/shoes0.png',
	'images/shoes1.png',
	'images/shoes2.png',
	'images/shoes3.png',
	'images/shoes4.png',
	'images/shoes5.png',
]

//a function that cycles through shoes

let whichShoes = 0
function nextShoes() {
	whichShoes++
	const next = whichShoes % shoes.length
	return shoes[next]
}

//a function that initiates the switch between clown shoes

function changeClownShoes() {
	const img = document.getElementById('shoes')
	img.src = nextShoes()
	console.log('Changed clown shoes to', img.src)
}

// a function that climbs up through body parts

let whichPart = 0
function nextPart() {
	whichPart++
	whichPart = whichPart % 3
}

// a function that climbs down  body parts

function prevPart() {
	whichPart--
	whichPart = whichPart % 3
	if (whichPart < 0) {
		whichPart = 2
	}
}

// assigning key functions to switching and climbing functions

document.onkeyup = function (e) {
	console.log('onkeyup', e.key)
	switch (e.key) {
		case 'ArrowUp':
			prevPart()
			updateLabel()
			break
		case 'ArrowDown':
			nextPart()
			updateLabel()
			break
		case 'ArrowRight':
			if (whichPart === 0) changeClownHead()
			else if (whichPart === 1) changeClownBody()
			else changeClownShoes()
			break
		case 'ArrowLeft':
			if (whichPart === 0) changeClownHead()
			else if (whichPart === 1) changeClownBody()
			else changeClownShoes()
			break
	}
}

// displays a label to let you know what body part you
// are currently on

function updateLabel() {
	let val = 'shoes'
	if (whichPart === 0) {
		val = 'head'
	} else if (whichPart === 1) {
		val = 'body'
	}

	var label_ref = document.getElementById('myLabel')
	label_ref.innerText = val
}

//ALTERNATE INDEX METHOD
//concatinating the list of images would mean fewer long lists,
//But I find it easier to hold them in my head as lists rn
//
//
//var clothesIndex = 0
//function changeClownClothesRight() {
//if (clothingArea == 0){
//document.getElementById("head").src="./images/head".concat(clothesIndex,".png")
//}
//else if (clothingArea == 1){
///document.getElementById("body").src="./images/body".concat(clothesIndex,".png")
//}
//else if (clothingArea == 2){
//document.getElementById("shoes").src="./images/shoes".concat(clothesIndex,".png")
//}
// clothesIndex ++;
//if (clothesIndex > 5) {
// clothesIndex = 0
//}
