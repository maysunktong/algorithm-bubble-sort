let inputArr = [1, 4, 45, 6, 10, 106, -8];

let bubbleSort = (inputArr) => {
  /* length of array is 6  */
  let len = inputArr.length;
  let swapped;
  /* NESTED LOOP */
  /* DO-While loop will execute true until it hits 'false' */
  do {
    swapped = false;
    /* For-loop: repeat the block */
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        /* Swapping: replacing each other if the condition is true */
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;∏
      }
    }
  } while (swapped); //false
  return inputArr;
};

console.log(bubbleSort(inputArr));

/* MAY */
