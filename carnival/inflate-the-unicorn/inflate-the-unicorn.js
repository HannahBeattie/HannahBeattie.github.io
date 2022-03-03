// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

const uniCorns = [
	'./images/unicorn-0.png',
	'./images/unicorn-1.png',
	'./images/unicorn-2.png',
	'./images/unicorn-3.png',
]

let whichUnicorn = 0
function nextUnicorn() {
	whichUnicorn++
	if (whichUnicorn === uniCorns.length) {
		alert('POP! You popped me good!')
		whichUnicorn = 0
	}

	return uniCorns[whichUnicorn]
}

// instead of whichUnicorn = 0, could be whichUnicorn = whichUnicorn % uniCorns.length

function change(img) {
	console.log('\n\nve\nwhat is event\n\n', img, '\n\n\n')
	img.src = nextUnicorn()
}

// function change(img, whichCorn) {
// 	console.log('\n\nve\nwhat is event\n\n', img, '\n\n\n  whichCorn:', whichCorn)
//  if (whichCorn === 0) {
//      img.src = nextUnicorn()
//  } else if (whichCorn === 1) {
//      img.src = nextUnicorn2()
//  } else {
//      img.src = nextUnicorn3()
//  }
// }

let whichUnicorn2 = 0
function nextUnicorn2() {
	whichUnicorn2++
	whichUnicorn2 = whichUnicorn2 % uniCorns.length
	if (whichUnicorn2 === 0) {
		alert("POP POP DON'T STOP")
	}
	return uniCorns[whichUnicorn2]
}

function changeSeccond(img) {
	console.log('\n\nve\nwhat is event\n\n', img, '\n\n\n')
	img.src = nextUnicorn2()
}

let whichUnicorn3 = 0
function nextUnicorn3() {
	whichUnicorn3++
	whichUnicorn3 = whichUnicorn3 % uniCorns.length
	if (whichUnicorn3 === 0) {
		alert('HOW DARE YOU POP ME!')
	}
	return uniCorns[whichUnicorn3]
}

function changeThird(img) {
	console.log('\n\nve\nwhat is event\n\n', img, '\n\n\n')
	img.src = nextUnicorn3()
}
