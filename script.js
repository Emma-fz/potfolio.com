const titles = [" Frontend Developer", " Graphic Designer", " Pro Forex Trader"];
let index = 0;

function changeTitle() {
    const titleElement = document.getElementById("dynamic-title");
    titleElement.textContent = titles[index];
    index = (index + 1) % titles.length; // loop through the array
}

// Change title every 3 seconds (3000 milliseconds)
setInterval(changeTitle, 3000);