const inputArr = `noon`.trim().split('');
const reverseArr = [...inputArr].reverse();
if (JSON.stringify(inputArr) === JSON.stringify(reverseArr)) {
  console.log(1);
} else {
  console.log(0);
}
