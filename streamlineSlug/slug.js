slug.js

//down key press to change body Area

document.addEventListener('keyup', changeArea)
document.addEventListener('keydown', changeArea)
window.addEventListener('keydown', changeClothes)

let area = 0
let clothesIndex = 0

//left & right key press to change body area

function move(up) {
	if (up) {
		area++
	} else {
		area--
	}

	//up & down key press to change clothing

	function change(right) {
		if (right) {
			area++
		} else {
			area--
		}

		function changeArea(key) {
			if (key.KeyCode === 40) {
				move(false)
				console.log("I'm going on down")
			} else if (key.keyCode === 38) {
				move(true)
				console.log("I'm going up")
			}
		}

		function changeClothes(key) {
			if (key.KeyCode === 37) {
				move(false)
				console.log("I'm going on left")
			} else if (key.keyCode === 39) {
				move(true)
				console.log("I'm going right")
			}
		}

		//clothing index

		//clothing area 0 = hair
		//clothing area 1 = head
		//clothing area 2 = glassess
		//clothing area 3 = body
		//clothing area 4 = bottom
		//clothing area 5 = accessories
		//clothing area 6 = tail

		function change(right) {
			if (clothingArea === 0) {
				document.getElementById('hair').src = '/images/0/hair'.concat(clotherIndex, '.png')
			} else if (clothingArea === 1) {
				document.getElementById('head').src = '/images/1/face'.concat(clotherIndex, '.png')
			} else if (clothingArea === 2) {
				document.getElementById('glasses').src = '/images/2/glasses'.concat(
					clotherIndex,
					'.png'
				)
			} else if (clothingArea === 3) {
				document.getElementById('body').src = '/images/3/top'.concat(clotherIndex, '.png')
			} else if (clothingArea == 4) {
				document.getElementById('bottom').src = '/images/4/bottoms'.concat(
					clotherIndex,
					'.png'
				)
			} else if (clothingArea === 5) {
				document.getElementById('accessories').src = '/images/5/accessories'.concat(
					clotherIndex,
					'.png'
				)
			} else if (clothingArea === 6) {
				document.getElementById('tail').src = '/images/6/tail'.concat(clotherIndex, '.png')
			}

			if (clothesIndex < 0) {
				clothesIndex = 6
				console.log(clothesIndex)
			}
		}
	}
}
