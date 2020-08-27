document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll('.grid div')
	const width = 15
	let currentShooterIndex = 202

	

	//add invaders
	const alienInvaders = [0]
	alienInvaders.forEach(invader => squares[invader].classList.add('invader'))


	//decend invaders
	alienInvaders.forEach(index => squares)

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

	document.addEventListener('keydown', moveShooter)

})