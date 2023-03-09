// Question 1. Why does this code not work? Provide a working version?

//Remove values less than 10 from an array.
function question1_removeSmallNumbers(list: (number | undefined)[]) {
  for (let i = 0; i < list.length; i++) {
    const n = list[i];
    if (n && n < 10) {
      console.log("removing", n);
      list.splice(i, 1);
    }
  }
}
// this code doesn't work because the splice function is within the for-loop which causes errors with indexing whenever a number is removed.
// running the current function in the browser with a test `list` = [1,2,3,5,8,15,2,14,32,75,20]
// outputs `list` = [2, 5, 15, 14, 32, 75, 20]. It doesn't remove all values less than 10.

function removeSmallNumbers(list: number[]): number[] {
  return list.filter((num) => num >= 10);
}

//the above code outputs: [15, 14, 32, 75, 20]
