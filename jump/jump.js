/* the user can make the user jump. Gravity pullls the object down. Objects move towards the
    controllable object getting faster and faster. If the objects collide with the monster the game
    ends. A scorboard will increase while the monster lives */

var figY = 30
var jumpInterval
var numObsticlesSpawned = 1
var gameSpeed = 1
var isAlive = true
var score = 0
var highScore = 0

window.onload = function () {
	loadHighScore()
	var scorLabel = document.getElementById('scoring')

	spawnObsticle()
	setInterval(function () {
		score += 1
		if (score > highScore) {
			scorLabel.innerHTML = 'score: ' + score + ' (new high score!)'
		} else {
			scorLabel.innerHTML = 'score: ' + score + ' high score: ' + highScore
		}
	}, 1000)
}

function loadHighScore() {
	if (localStorage.getItem('highScore') != null) {
		highScore = localStorage.getItem('highScore')
	}
}

function spawnObsticle() {
	var obsticleX = 100
	numObsticlesSpawned += 1
	if (numObsticlesSpawned % 10 == 1) {
		gameSpeed *= 1.1
	}
	var newObsticle = document.createElement('img')

	newObsticle.style.width = '10%'
	newObsticle.style.position = 'absolute'
	newObsticle.style.top = '37%'
	newObsticle.style.left = '100%'
	newObsticle.setAttribute('src', 'ballsack.png')

	setInterval(function () {
		obsticleX -= gameSpeed
		newObsticle.style.left = obsticleX + '%'

		checkCollision(obsticleX)
	}, 20)

	document.body.appendChild(newObsticle)

	var respawnTime = (Math.random() * 3000) / gameSpeed + 500

	setTimeout(function () {
		spawnObsticle()
	}, respawnTime)
}

function checkCollision(ObsticleX) {
	if (ObsticleX > 29 && ObsticleX < 31 && figY === 30) {
		isAlive = false
		if (score > highScore) {
			alert(
				'You died, but you got the new high score by jumping over ' + score + ' ballsacks!'
			)
			highScore = score
			localStorage.setItem('highScore', highScore)
			location.reload()
		} else {
			alert(
				'Oopsie! You died. ' +
					'Your score is ' +
					score +
					' , ' +
					'the highscore for jumping over ballsacks is ' +
					highScore +
					'.'
			)
		}
		if (!isAlive) {
			score = -1
		}
	}
}

/* this function makes the figure jump*/
window.onkeydown = function (e) {
	var fig = document.getElementById('figure')
	if (e.keyCode === 32) {
		//console.log('hi')
		var steps = 0
		jumpInterval = setInterval(function () {
			steps += 1
			var change_in_y = getChangeY(steps)
			figY -= change_in_y
			if (figY > 30) {
				figY = 30
				/* clears the interval increase and returns
        the figure to original height*/
				clearInterval(jumpInterval)
			}
			fig.style.top = figY + '%'
		}, 10)
	}
}
/* this function dictates the height of the jump
and simulates gravity*/
function getChangeY(steps) {
	var change = (-(steps - 12) * (steps - 12) + 144) / 75
	return change
}
