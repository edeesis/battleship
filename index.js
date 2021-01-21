var app = new Vue({
  el: '#app',
  vuetify: new Vuetify({
	  theme: { dark: true }
  }),
  data: {
  	numShips: 8,
    message: 'Hello Vue!',
    show: {},
	numShown: 0,
	numMissed: 0
  },
  computed: {
	rows() {
		if (window.location.search) {
			return [2, 4, 6, 8, 10]
		} else {
			return [1, 2, 3, 4, 5, 6]
		}
	},
	columns() {
		if (window.location.search) {
			return ['Mountain Climbers', 'High Knees', 'Crab Kicks', 'Arm Circles', 'Windmills', 'Frog Jumps']
		} else {
			return ['Jumping Jacks', 'Squats', 'Push Ups', 'Lunges', 'Star Jumps', 'Shoulder Taps']
		}
	},
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
		console.log(this.numShown)
		return this.numShown === this.numShips;
	}
  },
  methods: {
  	showBehind(row, column) {
  		if (!this.show[row]) {
  			this.$set(this.show, row, {})
  		}
  		this.$set(this.show[row], column, true)
		if (this.shipLocations[this.rows.indexOf(row) * this.columns.length + this.columns.indexOf(column)]) {
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
