import { quickSort } from "./quickSort.js";
let randomize_array = document.getElementById("randomize_array_btn");
let sort_array = document.getElementById("sort_array_btn");
let bars_container = document.getElementById("bars_container");
let quick = document.getElementById("quickSort");
let bubble = document.getElementById("bubbleSort");
let minRange = 1;
let maxRange = Math.floor(
  document.getElementById("container").clientWidth / 14
);

let numOfBars = Math.floor(
  document.getElementById("container").clientWidth / 14
);
console.log(numOfBars);
let heightFactor = 5.5;
let unsortedArray = new Array(numOfBars);

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createRandomArray() {
  for (let i = 0; i < unsortedArray.length; i++) {
    unsortedArray[i] = randomNumberInRange(minRange, maxRange);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createRandomArray();
  renderBars(unsortedArray);
});
quick.addEventListener("click", function () {
  createRandomArray();
  bars_container.innerHTML = "";
  renderBars(unsortedArray);
});
bubble.addEventListener("click", function () {
  createRandomArray();
  bars_container.innerHTML = "";
  renderBars(unsortedArray);
});

function renderBars(array) {
  for (let i = 0; i < array.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * heightFactor + "px";
    bars_container.appendChild(bar);
  }
}

randomize_array.addEventListener("click", function () {
  createRandomArray();
  bars_container.innerHTML = "";
  renderBars(unsortedArray);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          if (k !== j && k !== j + 1) {
            bars[k].style.backgroundColor = "aqua";
          }
        }
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height = array[j] * heightFactor + "px";
        bars[j].style.backgroundColor = "lightgreen";
        bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
        bars[j + 1].style.backgroundColor = "lightgreen";
        await sleep(10);
      }
    }
    await sleep(10);
  }
  return array;
}

sort_array.addEventListener("click", function () {
  let sortedArray = [];
  if (quick.checked) {
    sortedArray = quickSort(unsortedArray, 0, unsortedArray.length - 1);
  }
  if (bubble.checked) sortedArray = bubbleSort(unsortedArray);

  console.log(sortedArray);
});

window.onresize = () => {
  location.reload();
};
