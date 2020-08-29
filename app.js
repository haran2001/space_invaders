document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll('.grid div')
	const width = 15
	let currentShooterIndex = 202
	var alienInterval
	var bulletInterval
	var invaderDirection = 0
	let currentBulletIndex
	let alienInvaders = [15, 16]
	

	//add shooter
	squares[currentShooterIndex].classList.add('shooter')

	//add invaders
	alienInvaders.forEach(invader => squares[invader].classList.add('invader'))

	//decend invader
	function decend(){
		if(alienInvaders[alienInvaders.length - 1] < 210){
			alienInvaders.forEach(index => squares[index].classList.remove('invader'))
			for(let i=0; i<alienInvaders.length; i++){
				alienInvaders[i] += 15
			}
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

	//shoot from shooter
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

	//callfuntion for shoot
	function shootCall(){
		// console.log(currentShooterIndex)
		currentBulletIndex = currentShooterIndex
		bulletInterval = setInterval(shoot, 50)
	}

	//check for collision
	function collisionCheck(){
		for(let i=0; i<alienInvaders.length; i++){
			console.log('collision check')
			if(alienInvaders[i] === currentBulletIndex){
				// alienInvaders.pop()
				console.log(alienInvaders.splice(currentBulletIndex, 1))
				console.log('alien removed at ' + currentBulletIndex)
				squares[currentBulletIndex].classList.remove('shooter')
       			squares[currentBulletIndex].classList.add('boom1')
       			squares[currentBulletIndex].classList.remove('boom1')
       			clearInterval(bulletInterval)
			}
		}

	}

	//set invader position to the top of screen
	function resetInvaders(){
		alienInvaders = [15 , 16]
	}
	
	alienInterval = setInterval(decend, 1000)
	document.addEventListener('keydown', moveShooter)
	document.addEventListener('click', shootCall)
	console.log("Hello world")
})