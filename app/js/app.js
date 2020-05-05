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

let offSet2 = 3400;

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

const water = noWorkers => {
	"use strict";
	let canvas, ctx;
	let pointer = { x: 0, y: 0, isDown: false };
	let width, height, hwidth, hheight, size, map, oldind, newind;
	let textureBuffer8, textureBuffer32;
	let ripple, rippleBuffer8, rippleBuffer32;
	const window = {
		CP: {
			shouldStopExecution(e) {
			},
			exitedLoop(e) { }
		}
	};
	// ---- messages from the main thread ----
	const message = e => {
		switch (e.data.msg) {
			case "pointerMove":
				pointer.x = e.data.x | 0;
				pointer.y = e.data.y | 0;
				break;
			case "pointerDown":
				pointer.x = e.data.x | 0;
				pointer.y = e.data.y | 0;
				pointer.isDown = true;
				break;
			case "pointerUp":
				pointer.isDown = false;
				break;
			case "start":
				canvas = e.data.elem;
				width = canvas.width;
				height = canvas.height;
				ctx = canvas.getContext("2d");
				hwidth = width / 2;
				hheight = height / 2;
				size = width * (height + 2) * 2;
				map = new Int16Array(size);
				oldind = width;
				newind = width * (height + 3);
				const textureBuffer = new ArrayBuffer(e.data.imgData.data.length);
				textureBuffer8 = new Uint8ClampedArray(textureBuffer); // 8 bit clamped view
				textureBuffer32 = new Uint32Array(textureBuffer); // 32 bits view
				textureBuffer8.set(e.data.imgData.data);
				// ripple texture
				ripple = e.data.imgData;
				const rippleBuffer = new ArrayBuffer(ripple.data.length);
				rippleBuffer8 = new Uint8ClampedArray(rippleBuffer);
				rippleBuffer32 = new Uint32Array(rippleBuffer);
				// start
				run();
				gloop();
				setInterval(gloop, 4000);
				break;
		}
	};
	// create wave
	function wave(dx, dy, r) {
		for (let j = -r; j < r; j++) {
			for (let k = -r; k < r; k++) {
				if (j * j + k * k < r * r) {
					const x = dx + k;
					const y = dy + j;
					if (y > 0 && y < height && x > 0 && x < width) {
						map[oldind + y * width + x] += 256;
					}
				}
			}
		}
	}
	function water() {
		// toggle maps each frame
		let i = oldind;
		oldind = newind;
		newind = i;
		let mapind = oldind;
		const len = width * height;
		for (let i = 0; i < len; i++) {
			const x = (i % width) | 0;
			const y = (i / width) | 0;
			let data =
				((map[mapind - width] +
					map[mapind + width] +
					map[mapind - 1] +
					map[mapind + 1]) >>
					1) -
				map[newind + i];
			data -= data >> 6;
			mapind++;
			if (x !== 0) map[newind + i] = data;
			data = 1024 - data;
			// offsets
			let a = ((x - hwidth) * data / 1024 + hwidth) | 0;
			let b = ((y - hheight) * data / 1024 + hheight) | 0;
			// 32 bits pixel copy
			rippleBuffer32[i] = textureBuffer32[a + b * width];
		}
		ripple.data.set(rippleBuffer8);
		ctx.putImageData(ripple, 0, 0);
	}
	function gloop() {
		wave(hwidth, hheight, 16);
	}
	// main loop
	function run() {
		requestAnimationFrame(run);
		water();
		if (pointer.isDown) {
			wave(pointer.x, pointer.y, 16);
		}
	}
	// ---- main thread vs. worker
	if (noWorkers) {
		// ---- map postMessage ----
		return {
			postMessage(data) {
				message({ data: data });
			}
		};
	} else {
		// ---- worker messaging ----
		onmessage = message;
	}
};
///////////////// main thread code ///////////////////
let worker = null;
const createWorker = fn => {
	const URL = window.URL || window.webkitURL;
	return new Worker(URL.createObjectURL(new Blob(["(" + fn + ")()"])));
};
// ---- init canvas ----
const canvas = document.querySelector("canvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
// ---- source image ----
const img = document.getElementById("texture");
const texture = document.createElement("canvas");
texture.width = canvas.width;
texture.height = canvas.height;
const ctx = texture.getContext("2d");
ctx.drawImage(img, 0, 0);
const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// ---- instanciate worker ----
if (window.Worker && window.OffscreenCanvas) {
	worker = createWorker(water);
	const offscreen = canvas.transferControlToOffscreen();
	worker.postMessage({ msg: "start", elem: offscreen, imgData: imgData }, [
		offscreen
	]);
} else {
	worker = water(true);
	worker.postMessage({ msg: "start", elem: canvas, imgData: imgData });
}
// ---- pointer events ----
const pointer = {
	x: 0,
	y: 0,
	move(e) {
		if (e.targetTouches) {
			e.preventDefault();
			this.x = e.targetTouches[0].clientX;
			this.y = e.targetTouches[0].clientY;
		} else {
			this.x = e.clientX;
			this.y = e.clientY;
		}
		worker.postMessage({
			msg: "pointerMove",
			x: this.x - canvas.offsetLeft,
			y: this.y - canvas.offsetTop
		});
	},
	down(e) {
		this.move(e);
		worker.postMessage({
			msg: "pointerDown",
			x: this.x - canvas.offsetLeft,
			y: this.y - canvas.offsetTop
		});
	},
	up(e) {
		worker.postMessage({
			msg: "pointerUp"
		});
	}
};
window.addEventListener("mousemove", e => pointer.move(e), false);
canvas.addEventListener("touchmove", e => pointer.move(e), false);
window.addEventListener("mousedown", e => pointer.down(e), false);
window.addEventListener("touchstart", e => pointer.down(e), false);
window.addEventListener("mouseup", e => pointer.up(e), false);
window.addEventListener("touchend", e => pointer.up(e), false);