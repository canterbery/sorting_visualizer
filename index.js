import { quickSort } from "./quickSort.js";
import { heapSort } from "./heapSort.js";
import {
  heightFactor,
  minRange,
  maxRange,
  numOfBars,
  sleep,
  randomNumberInRange,
} from "./const.js";

let randomize_array = document.getElementById("randomize_array_btn");
let sort_array = document.getElementById("sort_array_btn");
let bars_container = document.getElementById("bars_container");
let quick = document.getElementById("quickSort");
let bubble = document.getElementById("bubbleSort");
let heap = document.getElementById("heapSort");

let unsortedArray = new Array(numOfBars);

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
heap.addEventListener("click", function () {
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

  if (heap.checked) sortedArray = heapSort(unsortedArray);

  console.log(sortedArray);
});

window.onresize = () => {
  location.reload();
};
