import { heightFactor, sleep } from "./const.js";

let bars = document.getElementsByClassName("bar");

const buildMaxHeap = async (arr) => {
  // Get index of the middle element
  let i = Math.floor(arr.length / 2 - 1);

  // Build a max heap out of
  // All array elements passed in
  while (i >= 0) {
    await heapify(arr, i, arr.length);
    i -= 1;
  }
};

const heapify = async (heap, i, max) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;

    // Get the left child index
    // Using the known formula
    leftChild = 2 * i + 1;

    // Get the right child index
    // Using the known formula
    rightChild = leftChild + 1;

    // If the left child is not last element
    // And its value is bigger
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    // If the right child is not last element
    // And its value is bigger
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    // If none of the above conditions is true
    // Just return
    if (index === i) {
      return;
    }

    // Else swap elements
    await swap(heap, i, index);

    // Continue by using the swapped index
    i = index;
  }
};

const swap = async (arr, firstItemIndex, lastItemIndex) => {
  await sleep(50);
  const temp = arr[firstItemIndex];
  arr[firstItemIndex] = arr[lastItemIndex];
  arr[lastItemIndex] = temp;

  bars[firstItemIndex].style.height = arr[firstItemIndex] * heightFactor + "px";
  bars[firstItemIndex].style.backgroundColor = "lightgreen";
  bars[lastItemIndex].style.height = arr[lastItemIndex] * heightFactor + "px";
  bars[lastItemIndex].style.backgroundColor = "lightgreen";
  for (let k = 0; k < bars.length; k++) {
    if (k !== firstItemIndex && k !== lastItemIndex) {
      bars[k].style.backgroundColor = "aqua";
    }
  }
};

export const heapSort = async (arr) => {
  // Build max heap
  await buildMaxHeap(arr);

  // Get the index of the last element
  let lastElement = arr.length - 1;

  // Continue heap sorting until we have
  // One element left
  while (lastElement > 0) {
    await swap(arr, 0, lastElement);
    await heapify(arr, 0, lastElement);
    lastElement -= 1;
  }

  // Return sorted array
  return arr;
};
