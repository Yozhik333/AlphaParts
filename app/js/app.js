document.addEventListener("DOMContentLoaded", function () {

	let logo = document.querySelector('.logo');

	for (let i = 1; i <= 5; i++) { // write var and check
		let item = document.createElement('span');

		logo.appendChild(item);
	}

});
