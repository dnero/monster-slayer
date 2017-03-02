new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function () {
			this.gameIsRunning = true; // hide the start game button
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},

		attack: function () {
			var damage = _.random(3, 10);

			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage
			});
			this.attackOnPlayer();
		},

		specialAttack: function () {
			var damage = _.random(10, 20);

			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster hard for ' + damage
			});
			this.attackOnPlayer();
		},
		
		heal: function () {
			// heal by 10
			this.playerHealth = _.clamp(this.playerHealth + 10, 0, 100);
			this.turns.unshift({
				isPlayer: true,
				text: 'Player healed by 10'
			});
			this.attackOnPlayer();
		},
		
		giveUp: function () {
			this.gameIsRunning = false;
		},

		attackOnPlayer: function () {
			var damage = _.random(5, 12);

			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage
			});
			
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