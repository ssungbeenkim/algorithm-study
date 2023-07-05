const input = ``.trim().split('').map(Number);
const answer = [];
input.forEach((n, i) => {
  if (i === 0) {
    answer.push(n.toString(2));
  } else {
    answer.push(n.toString(2).padStart(3, 0));
  }
});
console.log(input ? answer.join('') : '');
/* 8진수를 2진수로 변환. 최대 길이는 길다. 
문자열을 가지고 다뤄줘야 할 것이다.  
한 글짜씩 가져와서 8진수로 변환해 준다. 
*/
