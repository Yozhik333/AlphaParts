document.addEventListener("DOMContentLoaded", function () {

	var logo = document.getElementById('logo');

	for (let i = 1; i <= 5; i++) { // write var and check
		var item = document.createElement('span');

		logo.appendChild(item);
	}

});
