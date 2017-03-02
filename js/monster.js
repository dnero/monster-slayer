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
			this.playerHealth -= _.random(5, 12);
			this.monsterHealth -= _.random(3, 10);

			if ( this.playerHealth === 0 && this.monsterHealth === 0 ) {
				alert('tie game');
				this.gameIsRunning = false; // game over
				return;
			}
			if( this.playerHealth <= 0 ) {
				alert('you lose');
				this.gameIsRunning = false;
				return;
			}
			if( this.monsterHealth <= 0 ) {
				alert('you win');
				this.gameIsRunning = false;
				return;
			}
		},
		specialAttack: function () {
			
		},
		heal: function () {

		},
		giveUp: function () {

		},
	}
});