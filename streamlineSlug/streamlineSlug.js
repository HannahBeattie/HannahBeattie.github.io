let whichPart = 0

const parts = {
	Hair: {
		index: 0,
		count: 9,
		path: 'images/0/hair',
		elemId: 'hair',
	},
	Head: {
		index: 0,
		count: 20,
		path: 'images/1/face',
		elemId: 'head',
	},
	Glasses: {
		index: 0,
		count: 4,
		path: 'images/2/glasses',
		elemId: 'glasses',
	},
	Body: {
		index: 0,
		count: 21,
		path: 'images/3/top',
		elemId: 'body',
	},
	Bottom: {
		index: 0,
		count: 5,
		path: 'images/4/bottoms',
		elemId: 'bottom',
	},
	Accessories: {
		index: 0,
		count: 25,
		path: 'images/5/accessories',
		elemId: 'accessories',
	},
	Tail: {
		index: 0,
		count: 6,
		path: 'images/6/tail',
		elemId: 'tail',
	},
}

const partNames = Object.keys(parts)

window.onload = () => {
	console.log('Hannah is amazing! Long live Sluggly!')
	console.log('Parts is', parts)
	console.log('partNames is', partNames)
	updateLabel()
}

function updateClothes() {
	console.log('check: Update clothes for part', currentPart())

	const part = currentPart()
	const elem = document.getElementById(part.elemId)
	elem.src = part.path.concat(part.index, '.png')
	console.log('Updated image for part to :', elem.src)
}

function currentPart() {
	const currentPartName = partNames[whichPart]
	const part = parts[currentPartName] // parts['hair'] === parts.hair
	// console.log('currentPart()', { whichPart, part })
	return part
}

function nextPart(forward) {
	if (forward) {
		whichPart++
	} else {
		whichPart--
	}
	whichPart = whichPart % partNames.length
	if (whichPart < 0) {
		whichPart = partNames.length - 1
	}
	updateLabel()
}

// Update the current part's index to the next or previous outfit
// Const = this variatable is something we do not want to chang
// Index is the only value to be changed
function nextOutfit(forward) {
	const part = currentPart()
	console.log('updating to next outfit, current outfit is : ', part)
	if (forward) {
		part.index++
	} else {
		part.index--
	}
	part.index = part.index % part.count
	if (part.index < 0) {
		part.index = part.count - 1
	}
	updateClothes()
	console.log('updated, new outfit is :', part)
}

document.onkeyup = function (e) {
	console.log('onkeyup', e.key)
	switch (e.key) {
		case 'ArrowUp':
			nextPart(true)
			break
		case 'ArrowDown':
			nextPart()
			break
		case 'ArrowRight':
			nextOutfit(true)

			break
		case 'ArrowLeft':
			nextOutfit()
			break
		default:
			return
	}
}

function updateLabel() {
	const currentPartName = partNames[whichPart]
	var label_ref = document.getElementById('slugLabel')
	label_ref.innerText = currentPartName
}

function beVisible() {
	console.warn('clicked!!')
	const classes = document.getElementById('help').classList
	if (classes.contains('visible')) {
		classes.remove('visible')
	} else {
		classes.add('visible')
	}
}
