$(document).ready(function (){
	var inputs = [''];
	var totalString;
	const operators = ['+', '-', '/', '*'];
	const dot = ['.'];
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function getValue (input) {
		if (dot.includes(inputs[inputs.length - 1]) === true && input === '.') {
			console.log('Two "."');
		} else if (inputs.length === 1 && operators.includes(input) === false) {
			inputs.push(input);
		} else if (operators.includes(inputs[inputs.length - 1]) === false) {
			inputs.push(input);
		} else if (numbers.includes(Number(input))) {
			inputs.push(input);
		}
		update();
	};

	function update () {
		totalString = inputs.join('');
		$('#steps').html(totalString);
	};

	function getTotal () {
		totalString = inputs.join('');
		$('#steps').html(eval(totalString));
	};

	$('a').on('click', function () {
		if (this.id === 'clear') {
			inputs = [];
			update();
		} else if (this.id === 'backOne') {
			if (inputs.length <= 2) {
				inputs = [];
				update();
			} else {
				inputs.pop();
				update();
			}
		} else if (this.id === 'equals') {
			getTotal();
		} else {
			getValue(this.id);
		}
	});
	console.log(inputs);
});