// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//on start call main loop

//MAIN LOOP
//Wait a random amout of time
//peep a random hole
//peep for a random amount of time
//un-peep
//repeat

var popup = document.getElementById('myPopup')

const holes = document.querySelectorAll('.hole')
let lastHole
// let moleIsWacked = false
let timeUp = false
let score = 0

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
	const index = Math.floor(Math.random() * holes.length)
	const hole = holes[index]

	if (hole === lastHole) {
		return randomHole(holes)
	}
	lastHole = hole
	return hole
}

function peep() {
	const time = randomTime(450, 1050)
	const hole = randomHole(holes)
	hole.classList.add('mole')
	setTimeout(() => {
		hole.classList.remove('mole')
		if (timeUp && score === 0) {
			alert('The mole wins, long live the mole!')
		} else if (score > 0 && timeUp) {
			alert('YOU WIN! ' + ' you have killed ' + score + ' moles...enjoy your day, murderer.')
		} else {
			peep()
		}
	}, time)
}

function startGame() {
	//scoreboard.textContent = 0
	timeUp = false
	score = 0
	moleIsWacked = false // if not keeping score, replace score with moleIsWhacked in peep function
	peep()
	setTimeout(() => (timeUp = true), 15000)
}

//function whack(e) {
//if (!e.isTrusted) return
//score++
//this.parentNode.classList.remove('mole')
//scoreBoard.textContent = score
//}

//mole.forEach((x) => x.whack(e))

//filter through holes

//function whack(e) {

holes.forEach((hole) => hole.addEventListener('click', checkForMole))

let sound = new Audio('whack-audio.wav')

function checkForMole(event) {
	let hole = event.target
	console.log('hole', hole)
	const isThere = hole.classList.contains('mole')
	if (!isThere) return
	// moleIsWacked = true
	sound.play()
	score++

	//alert('I am wacked')
}

//if

//if (!e.isTrusted) return
//score++
//this.parentNode.classList.remove('mole')
//scoreBoard.textContent = score
//}
