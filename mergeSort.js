import { sleep } from "./const.js";

let bars = document.getElementsByClassName("bar");

async function merge(arr, start, mid, end) {
  let start2 = mid + 1;

  if (arr[mid] <= arr[start2]) {
    return;
  }
  while (start <= mid && start2 <= end) {
    // If element 1 is in right place
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;

      let barValue = bars[start2].style.height;

      // Shift all the elements between element 1
      // element 2, right by 1.
      while (index != start) {
        arr[index] = arr[index - 1];

        bars[index].style.backgroundColor = "lightgreen";
        bars[index - 1].style.backgroundColor = "lightgreen";
        await sleep(5);
        bars[index].style.height = bars[index - 1].style.height;

        bars[index].style.backgroundColor = "aqua";
        bars[index - 1].style.backgroundColor = "aqua";

        index--;
      }
      arr[start] = value;
      bars[start].style.height = barValue;

      start++;
      mid++;
      start2++;
    }
  }
  return arr;
}

export async function mergeSort(arr, l, r) {
  if (l < r) {
    let m = l + Math.floor((r - l) / 2);

    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);

    return await merge(arr, l, m, r);
  }
}
