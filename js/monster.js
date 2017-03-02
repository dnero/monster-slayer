new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false
	},
	methods: {
		startGame: function () {
			this.gameIsRunning = true; // hide the start game button
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},

		attack: function () {
			this.monsterHealth -= _.random(3, 10);
			this.attackOnPlayer();
		},

		specialAttack: function () {
			this.monsterHealth -= _.random(10, 20);

			this.attackOnPlayer();
		},
		
		heal: function () {
			// heal by 10
			this.playerHealth = _.clamp(this.playerHealth + 10, 0, 100);
			this.attackOnPlayer();
		},
		
		giveUp: function () {
			this.gameIsRunning = false;
		},

		attackOnPlayer: function () {
			this.playerHealth -= _.random(5, 12);
			if (this.checkWin()){
				return;
			}
		},

		checkWin: function () {
			var message = '';

			if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
				message = 'It\'s a tie...';
			}
			if (this.playerHealth <= 0) {
				message = 'You lose!'
			}
			if(this.monsterHealth <= 0) {
				message = 'You win!'
			}

			// if there's a game-ending message
			if (message) {
				if (confirm(message + ' Play again?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false; // game over
				}
				return true;
			}
			
			return false;
		}
	}
});