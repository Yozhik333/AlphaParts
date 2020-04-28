document.addEventListener("DOMContentLoaded", function () {

	let logo = document.querySelector('.logo');

	for (let i = 1; i <= 5; i++) { // write var and check
		let item = document.createElement('span');

		logo.appendChild(item);
	}

});

let offSet = 2800;

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube1").addClass("cube-1");
		$(".cube-text1").addClass("cube-text-1");

	} else {
		$(".cube1").removeClass("cube-1");
		$(".cube-text1").removeClass("cube-text-1");

	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube2").addClass("cube-2");
		$(".cube-text2").addClass("cube-text-2");
	} else {
		$(".cube2").removeClass("cube-2");
		$(".cube-text2").removeClass("cube-text-2");

	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube3").addClass("cube-3");
		$(".cube-text3").addClass("cube-text-3");
	} else {
		$(".cube3").removeClass("cube-3");
		$(".cube-text3").removeClass("cube-text-3");
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube4").addClass("cube-4");
		$(".cube-text4").addClass("cube-text-4");
	} else {
		$(".cube4").removeClass("cube-4");
		$(".cube-text4").removeClass("cube-text-4");
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet) {
		$(".cube5").addClass("cube-5");
		$(".cube-text5").addClass("cube-text-5");
	} else {
		$(".cube5").removeClass("cube-5");
		$(".cube-text5").removeClass("cube-text-5");
	}
});

//let bg;

let bg = document.querySelector('.mouse-parallax-bg');

if (bg) {
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
}

let bg2 = document.querySelector('.mouse-parallax-bg2');
if (bg2) {
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		bg2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
	});
}

let bg3 = document.querySelector('.mouse-parallax-bg3');

if (bg3) {
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		bg3.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
}

let bg4 = document.querySelector('.mouse-parallax-bg4');

if (bg4) {
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		bg4.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
}

let bg5 = document.querySelector('.mouse-parallax-bg5');

if (bg5) {
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		bg5.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
}

let bg6 = document.querySelector('.mouse-parallax-bg6');

if (bg6) {
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		bg6.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
}

let offSet2 = 3900;

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet2) {
		$(".causes-wrap").addClass("animation-five");
	} else {
		$(".causes-wrap").removeClass("animation-five");
	}
});

let offSet3 = 4800;

$(window).scroll(function () {
	if ($(this).scrollTop() > offSet3) {
		$(".causes-mobile").addClass("animation-five-mobile");
	} else {
		$(".causes-mobile").removeClass("animation-five-mobile");
	}
});

// Modal window

var modal = document.getElementById('myModal');


var btn1 = document.getElementById("myBtn1");


var span = document.getElementsByClassName("close")[0];


if (btn1) {
	btn1.onclick = function () {
		modal.style.display = "block";
	}
}


if (span) {
	span.onclick = function () {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}

$('#myBtn1').click(function () {
	$('body').toggleClass('body-hidden');
});


var modal = document.getElementById('myModal');


var btn2 = document.getElementById("myBtn2");


var span = document.getElementsByClassName("close")[0];


if (btn2) {
	btn2.onclick = function () {
		modal.style.display = "block";
	}
}


//if (span) { }
//span.onclick = function () {
//	modal.style.display = "none";
//	$('body').toggleClass('body-hidden');
//}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}

$('#myBtn2').click(function () {
	$('body').toggleClass('body-hidden');
});

var modal = document.getElementById('myModal');


var btnMB2 = document.getElementById("myBtnMB2");


var span = document.getElementsByClassName("close")[0];


if (btnMB2) {
	btnMB2.onclick = function () {
		modal.style.display = "block";
	}
}


//span.onclick = function () {
//	modal.style.display = "none";
//	$('body').toggleClass('body-hidden');
//}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}

$('#myBtnMB2').click(function () {
	$('body').toggleClass('body-hidden');
});

var modal = document.getElementById('myModal');


var btn3 = document.getElementById("myBtn3");


var span = document.getElementsByClassName("close")[0];


if (btn3) {
	btn3.onclick = function () {
		modal.style.display = "block";
	}
}


//span.onclick = function () {
//	modal.style.display = "none";
//	$('body').toggleClass('body-hidden');
//}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}

$('#myBtn3').click(function () {
	$('body').toggleClass('body-hidden');
});

var modal = document.getElementById('myModal');


var btnMB = document.getElementById("myBtnMB");


var span = document.getElementsByClassName("close")[0];


if (btnMB) {
	btnMB.onclick = function () {
		modal.style.display = "block";
	}
}


//span.onclick = function () {
//	modal.style.display = "none";
//	$('body').toggleClass('body-hidden');
//}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}

$('#myBtnMB').click(function () {
	$('body').toggleClass('body-hidden');
});

var modal = document.getElementById('myModal');


var btn4 = document.getElementById("myBtn4");


var span = document.getElementsByClassName("close")[0];


if (btn4) {
	btn4.onclick = function () {
		modal.style.display = "block";
	}
}


span.onclick = function () {
	modal.style.display = "none";
	$('body').toggleClass('body-hidden');
}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}

$('#myBtn4').click(function () {
	$('body').toggleClass('body-hidden');
});

var modal = document.getElementById('myModal');


var btn5 = document.getElementById("myBtn5");


var span = document.getElementsByClassName("close")[0];


if (btn5) {
	btn5.onclick = function () {
		modal.style.display = "block";
	}
}


//span.onclick = function () {
//	modal.style.display = "none";
//	$('body').toggleClass('body-hidden');
//}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		$('body').toggleClass('body-hidden');
	}
}

$('#myBtn5').click(function () {
	$('body').toggleClass('body-hidden');
});


$(".tab_item").not(":first").hide();
$(".wrapper-tabs .tab").click(function () {
	$(".wrapper-tabs .tab").removeClass("catalog-item-active").eq($(this).index()).addClass("catalog-item-active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("catalog-item-active");