let bars = document.getElementsByClassName("bar");
let heightFactor = 5.5;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function swap(array, leftIndex, rightIndex) {
  await sleep(100);
  var temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
  bars[leftIndex].style.height = array[leftIndex] * heightFactor + "px";
  bars[leftIndex].style.backgroundColor = "lightgreen";
  bars[rightIndex].style.height = array[rightIndex] * heightFactor + "px";
  bars[rightIndex].style.backgroundColor = "lightgreen";
  for (let k = 0; k < bars.length; k++) {
    if (k !== leftIndex && k !== rightIndex) {
      bars[k].style.backgroundColor = "aqua";
    }
  }
}
async function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      await swap(array, i, j);
      //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

export async function quickSort(array, left, right) {
  var index;
  if (array.length > 1) {
    index = await partition(array, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      await quickSort(array, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      await quickSort(array, index, right);
    }
  }
  return array;
}
