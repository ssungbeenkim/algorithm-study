/* 진수변환 문제. 
우선 메서드가 있으면 그것으로 풀어볼거고 
아니면 매뉴얼하게 해줘야 할 것이다.
10진수로 변환할 때는 parseInt, n진수로 변환할 때는 toString을 사용하면 됨.*/
{
  //틀림
  const n = Number(`11001100`);
  const dec = parseInt(n, 2);
  console.log(dec.toString(8));
}
/* 너무 쉽게 생각했다. 입력으로 주어지는 수의 최대 길이는 100만이다. 아무래도 '그' 방법을 써야겠음. 
기본적으로 3자리씩 끊어서 계산하는 방법이 있다. 그러나 100만자리의 수를 3분의 1로 줄인다
한들 33만.... 자리의 수가 될 것이다. max safe intiger 는 16자리의 수이니 턱없이 부족하다. 
3자리씩 변환을 해서 string의 형태로 만들고, 출력할 때 string 변환해서 출력되도록 해야겠다. 
*/

{
  const binaryStr = `${require('fs').readFileSync('dev/stdin')}`.trim();
  const oct = [];
  const leng = binaryStr.length;
  const rest = leng % 3;
  for (let i = leng - 3; 0 <= i; i -= 3) {
    const part = binaryStr.slice(i, i + 3);
    oct.push(parseInt(part, 2).toString(8));
  }
  if (rest === 2) {
    oct.push(parseInt(binaryStr.slice(0, 2).padStart(3, 0), 2).toString(8));
  } else if (rest === 1) {
    oct.push(parseInt(binaryStr.slice(0, 1).padStart(3, 0), 2).toString(8));
  }
  console.log(oct.reverse().join(''));
} // 잘 푼 것 같은데도 정답이 안나와서 계속 찾아봤는데, trim()을 안해주면 문제가 된다.
