"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	// Edit me
	let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

	function condition(number) {
		// Edit me
		if (number % 5 === 0) {
			return number;
		} else {
			return undefined;
		}
	}

	function display(array) {
		document.getElementById("display-array-values").textContent = array[0];
		document.getElementById("display-condition-value").textContent = array[1];
		document.getElementById("display-first-value").textContent = array[2];
	}

	function find(arr, func) {
		// Method I
		return display([arr, func, arr.filter(func)[0]]);

		// Method II
		// let value = undefined;

		// for (let i = 0; i < arr.length; i++) {
		// 	if (func(arr[i])) {
		// 		value = arr[i];
		// 		break;
		// 	}

		// }

		// return display([arr, func, value]);
	}

	find(arr, condition);
};