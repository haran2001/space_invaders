document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll('.grid div')
	const width = 15
	let currentShooterIndex = 202
	var myInterval
	var invaderDirection = 0
	

	//add invaders
	const alienInvaders = [15 , 16]
	alienInvaders.forEach(invader => squares[invader].classList.add('invader'))

	//decend invader
	function decend(){
		if(invaderDirection < 210){
			alienInvaders.forEach(index => squares[index + invaderDirection-width].classList.remove('invader'))
			alienInvaders.forEach(index => squares[index + invaderDirection].classList.add('invader'))
			invaderDirection += width
		}else{
			clearInterval(myInterval)
			console.log('cleared')
		}

	}
	//move shooter based on key codes
	function moveShooter(e){
		squares[currentShooterIndex].classList.remove('player')
		switch(e.keyCode) {
			case 37: 
			if(currentShooterIndex % width !== 0)
				currentShooterIndex -= 1
			break

			case 39:
			if(currentShooterIndex % width < width - 1)
				currentShooterIndex += 1
			break
		}
		squares[currentShooterIndex].classList.add('player')
	}

	myInterval = setInterval(decend, 1000)
	// myInterval
	document.addEventListener('keydown', moveShooter)


})