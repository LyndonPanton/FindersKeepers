"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function find(arr, func) {
		// Method I
		return [arr, func, arr.filter(func)[0]];

		// Method II
		// let value = undefined;

		// for (let i = 0; i < arr.length; i++) {
		// 	if (func(arr[i])) {
		// 		value = arr[i];
		// 		break;
		// 	}

		// }

		// return [arr, func, value];
	}

	// Edit me
	let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

	find(arr, function(number) {
		// Edit me
		if (number % 5 === 0) {
			return number;
		} else {
			return undefined;
		}
	});
};