function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  document.getElementById(
    "secondHand"
  ).style.transform = `rotate(${secondDegrees}deg)`;
  document.getElementById(
    "minuteHand"
  ).style.transform = `rotate(${minuteDegrees}deg)`;
  document.getElementById(
    "hourHand"
  ).style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

function randomBg() {
  const box = document.getElementById("box");

  if (box) {
    // Function to generate a random number between 0 and 255
    const randomColorValue = () => Math.floor(Math.random() * 256);

    // Generate two random colors
    const color1 = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
    const color2 = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
    const color3 = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;

    // Create a linear gradient string
    const gradient = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;

    // Apply the gradient as the background of the box
    box.style.background = gradient;

    // console.log(`Generated gradient: ${gradient}`);
  }
}

// Call randomBg every 4 seconds (4000 milliseconds)
setInterval(randomBg, 4000);

// Initial call to set the first background
randomBg();
