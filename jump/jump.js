/* the user can make the user jump. Gravity pullls the object down. Objects move towards the
    controllable object getting faster and faster. If the objects collide with the monster the game
    ends. A scorboard will increase while the monster lives */

var figY = 45
var jumpInterval
var numObsticlesSpawned = 0
var gameSpeed = 1

window.onload = function () {
  spawnObsticle()
}

function spawnObsticle() {
  var obsticleX = 100
  numObsticlesSpawned += 1
  if (numObsticlesSpawned % 10 == 1) {
    gameSpeed *= 1.1
  }
  var newObsticle = document.createElement('div')
  newObsticle.style.backgroundColor = 'yellow'
  newObsticle.style.height = '5%'
  newObsticle.style.width = '3%'
  newObsticle.style.position = 'absolute'
  newObsticle.style.top = '45%'
  newObsticle.style.left = '100%'

  setInterval(function () {
    obsticleX -= gameSpeed
    newObsticle.style.left = obsticleX + '%'
  }, 20)

  document.body.appendChild(newObsticle)

  var respawnTime = Math.random() * 3000 + 500

  setTimeout(function () {
    spawnObsticle()
  }, respawnTime)
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
      if (figY > 45) {
        figY = 45
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
