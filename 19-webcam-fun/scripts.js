const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = function() {
	navigator.mediaDevices.getUserMedia({ video: true, audio: false })
	.then(localMediaStream => {
		video.src = window.URL.createObjectURL(localMediaStream);
		video.play();
	})
	.catch(err => console.error('OH NO!!! ', err));
}

const paintToCanvas = function() {
	const [width, height] = [video.videoWidth, video.videoHeight];
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0, 0, width, height);
		pixels = greenScreen(pixels);
		ctx.putImageData(pixels, 0, 0);
	}, 15);
}

const takePhoto = function() {
	snap.currentTime = 0;
	snap.play();

	const now = new Date();
	timestamp = `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}`
	const imageData = canvas.toDataURL('image/jpeg');
	const imageLink = document.createElement('a');
	imageLink.href = imageData;
	imageLink.setAttribute('download', `snapshot_${timestamp}`);
	imageLink.innerHTML = `<img src='${imageData}' alt='snapshot_${timestamp}' />`;
	strip.prepend(imageLink);
}

const redEffect = function(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

const rgbSplit = function(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

const greenScreen = function(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {

      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
