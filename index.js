var app = new Vue({
  el: '#app',
  vuetify: new Vuetify({
	  theme: { dark: true }
  }),
  data: {
  	numShips: 8,
  	columns: ['Jumping Jacks', 'Squats', 'Push Ups', 'Lunges', 'Star Jumps', 'Shoulder Taps'],
  	rows: [1, 2, 3, 4, 5, 6],
    message: 'Hello Vue!',
    show: {},
	numShown: 0,
	numMissed: 0
  },
  computed: {
  	shipLocations() {
  		const min = 0;
  		const max = this.columns.length * this.rows.length - 1;

  		squares = Array.apply(null, Array(max)).map(function () {});
  		for (let i = 0; i < this.numShips; i++) {
  			let index = -1;
  			do {
				index = Math.floor(Math.random() * (max - min + 1) ) + min;
  			} while (index == -1 || squares[index])
  			squares[index] = true
  		}
  		return squares;
  	},
	finished () {
		return this.numShown === this.numShips;
	}
  },
  methods: {
  	showBehind(row, column) {
  		if (!this.show[row]) {
  			this.$set(this.show, row, {})
  		}
  		this.$set(this.show[row], column, true)
		if (this.shipLocations[(row - 1) * this.columns.length + this.columns.indexOf(column)]) {
			this.numShown++;
		} else {
			this.numMissed++;
		}
  	},
	refresh() {
		window.location.reload();
	}
  }
})
