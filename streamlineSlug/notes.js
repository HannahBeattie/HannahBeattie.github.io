
function whichOutfit() {
	if (clothingArea == 0) {
		document.getElementById('hair').src = '/images/0/hair'.concat(clothingIndex, '.png')
	} else if (clothingArea == 1) {
		document.getElementById('head').src = '/images/1/face'.concat(clothingIndex, '.png')
	} else if (clothingArea == 2) {
		document.getElementById('glasses').src = '/images/2/glasses'.concat(clothingIndex, '.png')
	} else if (clothingArea == 3) {
		document.getElementById('body').src = '/images/3/top'.concat(clothingIndex, '.png')
	} else if (clothingArea == 4) {
		document.getElementById('bottom').src = '/images/4/bottoms'.concat(clothingIndex, '.png')
	} else if (clothingIndex == 5) {
		document.getElementById('accessories').src = '/images/5/accessories'.concat(
			clothesIndex,
			'.png'
		)
	} else if (clothingArea == 6) {
		document.getElementById('tail').src = '/images/6/tail'.concat(clothingIndex, '.png')
		console.log('clothing index is', clothesIndex)
	}
}
document.addEventListener('keyup', changeArea)
document.addEventListener('keydown', changeOutfit)

let clothingArea = 0
let clothingIndex = 0
let whichArea = 0
let whichOutfit = 0

function whichOutfit() {
	if (clothingArea == 0) {
		document.getElementById('hair').src = '/images/0/hair'.concat(clothingIndex, '.png')
	} else if (clothingArea == 1) {
		document.getElementById('head').src = '/images/1/face'.concat(clothingIndex, '.png')
	} else if (clothingArea == 2) {
		document.getElementById('glasses').src = '/images/2/glasses'.concat(clothingIndex, '.png')
	} else if (clothingArea == 3) {
		document.getElementById('body').src = '/images/3/top'.concat(clothingIndex, '.png')
	} else if (clothingArea == 4) {
		document.getElementById('bottom').src = '/images/4/bottoms'.concat(clothingIndex, '.png')
	} else if (clothingIndex == 5) {
		document.getElementById('accessories').src = '/images/5/accessories'.concat(
			clothesIndex,
			'.png'
		)
	} else if (clothingArea == 6) {
		document.getElementById('tail').src = '/images/6/tail'.concat(clothingIndex, '.png')
		console.log('clothing index is', clothesIndex)
	}
}

function changeOutfit(forwards) {
	if (forwards) {
		whichOutfit++
	} else whichOutfit--
	whichOutfit = whichOutfit % clothingIndex.length
	if (whichOutfit < 0) {
		whichOutfit = clothingIndex.length - 1
	}
	return clothingIndex[changeOutfit]
}

function whichArea() {
	if (clothingArea == 0) {
		document.getElementById('hair').src = '/images/0/hair'.concat(clothingIndex, '.png')
	} else if (clothingArea == 1) {
		document.getElementById('head').src = '/images/1/face'.concat(clothingIndex, '.png')
	} else if (clothingArea == 2) {
		document.getElementById('glasses').src = '/images/2/glasses'.concat(clothingIndex, '.png')
	} else if (clothingArea == 3) {
		document.getElementById('body').src = '/images/3/top'.concat(clothingIndex, '.png')
	} else if (clothingArea == 4) {
		document.getElementById('bottom').src = '/images/4/bottoms'.concat(clothingIndex, '.png')
	} else if (clothingIndex == 5) {
		document.getElementById('accessories').src = '/images/5/accessories'.concat(
			clothesIndex,
			'.png'
		)
	} else if (clothingArea == 6) {
		document.getElementById('tail').src = '/images/6/tail'.concat(clothingIndex, '.png')
		console.log('clothing index is', clothesIndex)
	}
}

function changeArea(up) {
	if (up) {
		whichArea++
	} else {
		whichArea--
	}
	whichArea = whichArea % clothingArea.length
	if (whichArea < 0) {
		whichArea = clothingArea.length - 1
	}
	return clothingArea[changeArea]
}

document.onkeyup = function (e) {
	console.log('onkeyup', e.key)
	switch (e.key) {
		case 'ArrowUp':
			changeArea(up)
			updateLabel()
			break
		case 'ArrowDown':
			changeArea()
			updateLabel()
			break
		case 'ArrowRight':
			changeOutfit(forwards)
			updateLabel()
		case 'ArrowLeft':
			changeOutfit()
			updateLabel()
			break
	}
}

function updateLabel() {
	let val = 'body'
	if (clothingArea === 0) {
		val = 'hair'
	} else if (clothingArea === 1) {
		val = 'head'
	} else if (clothingArea === 2) {
		val = 'glasses'
	} else if (clothingArea === 3) {
		val = 'body'
	} else if (clothingArea === 4) {
		val = 'bottom'
	} else if (clothingArea === 5) {
		val = 'accessories'
	} else {
		val = 'tail'
	}
	var label_ref = document.getElementById('myLabel')
	label_ref.innerText = val
}
























































document.addEventListener('keyup', changeArea)
document.addEventListener('keydown', changeArea)
window.addEventListener('keydown', changeClothes)

//up & down key press to change clothing

function change(back) {
	if (key.KeyCode === 37) {
		area++
	} else if (key.keyCode === 39) {
		area--
	}
}
//left & right key press to change body area

function move() {
	if (key.KeyCode === 40) {
		area++
	} else if (key.keyCode === 38) {
		area--
	}
}

function updateLabel() {
	let val = 'body'

	if (whichPart === 0) {
		val = 'head'
	} else if (whichPart === 1) {
		val = 'body'
	} else if (whichPart === 2) {
		val = 'bottom'
	} else if (whichPart === 3) {
		val = 'accessories'
	} else if (whichPart === 4) {
		val = 'tail'
	} else if (whichPart === 5) {
		val = 'glasses'
	} else {
		val = 'hair'
	}
	var label_ref = document.getElementById('myLabel')
	label_ref.innerText = val
}






let clothingArea = 0
let clothesIndex = 0

document.addEventListener('keyup', changeArea)
document.addEventListener('keydown', changeArea)
window.addEventListener('keydown', changeClothes)

function changeArea(true) {
    if (clothingArea++) 
    

	if (clothingArea > 6) {
		clothingArea = 0
	}

	console.log(clothingArea)
}



clothesIndex++

if (clothesIndex > clothesIndex.length) {
	clothesIndex = 0
	console.log(clothesIndex)
}

function changeClothes() {
	if (key.KeyCode === 40) {
		area++
	} else if (key.keyCode === 38) {
		area--
	}
}


function prevPart() {
	whichPart--
	whichPart = whichPart % 6
	if (whichPart < 0) {
		whichPart = 6
	}
}



function clothingArea(up)
switch (e.key) {
case 'ArrowUp': 
clothingArea++ 
    if (clothingArea > 6)
    {clothingArea = 0}
   // updateLabel() 
    break
case 'ArrowDown':
    clothingArea-- 
    if (clothingArea <0){
        clothingArea = 6
       // updateLabel() 
    }
}














let whichOutfit = 0
let area = 0

function whichOutfit(forwards) 
if (forwards) {
    whichOutfit++
} else whichOutfit--
whichOutfit = whichOutfit % clothing.length
if (whichOutfit < 0) {
    whichOutfit = clothingIndex.length - 1
return clothingIndex[changeOutfit]
}


}





document.onkeyup = function (e) {
	console.log('onkeyup', e.key)
	switch (e.key) {
		case 'ArrowUp':
			changeArea(up)
			updateLabel()
			break
		case 'ArrowDown':
			changeArea()
			updateLabel()
			break
	


document.onkeyup = function (e) {
	console.log('onkeyup', e.key)
	switch (e.key) {
case 'ArrowRight':
    whichOutfit(forwards)
    updateLabel()
case 'ArrowLeft':
    whichOutfit()
    updateLabel()




	if (area == 0) {
		document.getElementById('hair').src = '/images/0/hair'.concat(clothingIndex, '.png')
	} else if (area == 1) {
		document.getElementById('head').src = '/images/1/face'.concat(clothingIndex, '.png')
	} else if (area == 2) {
		document.getElementById('glasses').src = '/images/2/glasses'.concat(clothingIndex, '.png')
	} else if (area == 3) {
		document.getElementById('body').src = '/images/3/top'.concat(clothingIndex, '.png')
	} else if (area == 4) {
		document.getElementById('bottom').src = '/images/4/bottoms'.concat(clothingIndex, '.png')
	} else if (area == 5) {
		document.getElementById('accessories').src = '/images/5/accessories'.concat(
			clothesIndex,
			'.png'
		)
	} else if (area == 6) {
		document.getElementById('tail').src = '/images/6/tail'.concat(clothingIndex, '.png')
		console.log('clothing index is', clothesIndex)
	}
}

document.addEventListener('keyup', changeArea)
document.addEventListener('keydown', changeOutfit)




function changeArea(up) {
	if (up) {
		whichArea++
	} else {
		whichArea--
	}
	whichArea = whichArea % clothingArea.length
	if (whichArea < 0) {
		whichArea = clothingArea.length - 1
	}
	return clothingArea[changeArea]
}




function updateLabel() {
	let val = 'body'
	if (clothingArea === 0) {
		val = 'hair'
	} else if (clothingArea === 1) {
		val = 'head'
	} else if (clothingArea === 2) {
		val = 'glasses'
	} else if (clothingArea === 3) {
		val = 'body'
	} else if (clothingArea === 4) {
		val = 'bottom'
	} else if (clothingArea === 5) {
		val = 'accessories'
	} else {
		val = 'tail'
	}
	var label_ref = document.getElementById('myLabel')
	label_ref.innerText = val
}
