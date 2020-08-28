document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll('.grid div')
	const width = 15
	let currentShooterIndex = 202
	var alienInterval
	var bulletInterval
	var invaderDirection = 0
	let currentBulletIndex
	let alienInvaders = [15, 16]
	//add invaders

	alienInvaders.forEach(invader => squares[invader].classList.add('invader'))

	//decend invader
	function decend(){
		if(alienInvaders[alienInvaders.length - 1] > 210){
			alienInvaders.forEach(index => squares[index].classList.remove('invader'))
			alienInvaders.forEach(index => index += 15)
			alienInvaders.forEach(index => squares[index].classList.add('invader'))
		}

		else{
			resetInvaders()
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

	function shoot(){
		if(currentBulletIndex > width){
			console.log(currentBulletIndex)
			squares[currentBulletIndex].classList.remove('boom')
			currentBulletIndex -= width
			squares[currentBulletIndex].classList.add('boom')
			squares[currentBulletIndex + 15].classList.remove('boom')
			collisionCheck()
		}
		else{
			squares[currentBulletIndex].classList.remove('boom')
			clearInterval(bulletInterval)
		}
	}

	function shootCall(){
		console.log(currentShooterIndex)
		currentBulletIndex = currentShooterIndex
		bulletInterval = setInterval(shoot, 500)
	}

	function collisionCheck(){
		for(let i=0; i<alienInvaders.length; i++){
			if(alienInvaders[i] === currentBulletIndex){
				squares[i].classList.remove('invader')
				squares[i].classList.add('boom')
       			setTimeout(() => squares[currentBulletIndex].classList.remove('boom'), 250)
			}
		}

	}

	function resetInvaders(){
		alienInvaders = [15 , 16]
	}
	
	alienInterval = setInterval(decend, 1000)
	document.addEventListener('keydown', moveShooter)
	document.addEventListener('click', shootCall)
	console.log("Hello world")
})