var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
  	numShips: 8,
  	columns: ['Jumping Jacks', 'Squats', 'Push Ups', 'Lunges', 'Star Jumps', 'Shoulder Taps'],
  	rows: [1, 2, 3, 4, 5, 6],
    message: 'Hello Vue!',
    show: {},
  },
  computed: {
  	shipLocations() {
  		squares = Array.apply(null, Array(this.columns.length * this.rows.length)).map(function () {});
  		for (let i = 0; i < this.numShips; i++) {
  			let index = -1;
  			do {
				index = Math.floor(Math.random() * (this.columns.length * this.rows.length - 1 + 1) ) + 1;
  			} while (index == -1 || squares[index])
  			squares[index] = true
  		}
  		console.log(squares);
  		return squares;
  	}
  },
  methods: {
  	showBehind(row, column) {
  		if (!this.show[row]) {
  			this.$set(this.show, row, {})
  		}
  		this.$set(this.show[row], column, true)
  	}
  }
})
