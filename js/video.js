var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	video.loop = false;
	video.autoplay = false;
	video.load();




});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = document.querySelector('#slider').value / 100;
	document.querySelector("#volume").innerHTML = 100 * video.volume + "%";
	console.log("The volume is " + video.volume + "%");



});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause");
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow down Video");
	video.playbackRate *= 0.9;
	console.log("Playback rate is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() { 
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("Playback Rate is: " + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	if (video.currentTime+10 > video.duration) {
		console.log("Reset Video");
		video.currentTime = 0;

	}

	else{ 
		console.log("Skip 10 seconds");
		video.currentTime += 10;

	}
	console.log("Current time is " + video.currentTime);
});

document.querySelector('#mute').addEventListener("click", function() {
	console.log("Toggle Mute");
	if (video.muted == true) {
		console.log("Unmute");
		document.querySelector('#mute').innerHTML = "Mute";
		video.muted = false;
	}
	else {
		console.log("Mute");
		document.querySelector('#mute').innerHTML = "Unmute";
		video.muted = true;
	}
});

document.querySelector('#slider').addEventListener("input", function() {
	video.volume = document.querySelector('#slider').value / 100;
	document.querySelector('#volume').innerHTML = 100*video.volume + "%";
	console.log("The volume is " + video.volume);
});

document.querySelector('#vintage').addEventListener("click", function() {
	console.log("Old School Style");
	video.classList.add('oldSchool');
});

document.querySelector('#orig').addEventListener("click", function() {
	console.log("Original Style");
	video.classList.remove('oldSchool');
});
