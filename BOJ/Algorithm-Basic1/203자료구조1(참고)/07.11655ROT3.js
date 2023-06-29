/* 13자리씩 미뤄서 암호화. 숫자는 그대로 출력. 
주어진 문자열을 순회하면서 다음의 과정을 반복한다. 
알파벳이 아닌 경우 그대로 추가
알파벳이면 13자리를 미루는데, 
  소문자일 경우와 대문자일 경우를 나누어서 진행하도록 한다. 
  12자리를 미룬 수가 Z의 인덱스를 넘는다면 남는 수만큼 A부터 세어서 처리하면 될 것. 
  순차 연결 리스트에 넣어서 하는것도 괜찮을 것 같기는 한데, 간단하게 우선 구현해보도록 한다. 
*/
{
  const str = `      `;
  let ans = '';
  const AUni = 'A'.charCodeAt(0);
  const ZUni = 'Z'.charCodeAt(0);
  const aUni = 'a'.charCodeAt(0);
  const zUni = 'z'.charCodeAt(0);

  for (s of str) {
    sUni = s.charCodeAt(0);
    if ('a' <= s && s <= 'z') {
      if (zUni < sUni + 13) {
        ans += String.fromCharCode(aUni + sUni + 12 - zUni);
      } else {
        ans += String.fromCharCode(sUni + 13);
      }
    } else if ('A' <= s && s <= 'Z') {
      if (ZUni < sUni + 13) {
        ans += String.fromCharCode(AUni + sUni + 12 - ZUni);
      } else {
        ans += String.fromCharCode(sUni + 13);
      }
    } else {
      ans += s;
    }
  }

  console.log(ans);
}

//1. 출력 형식이 잘못되었다고 한다.
//2. 입력 받을 때 트림을 해서 받아서 그런것 같아서 수정 후 제출 - 정답.
