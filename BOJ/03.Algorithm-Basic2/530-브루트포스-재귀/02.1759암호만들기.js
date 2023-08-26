/* 

4 6
a t c i s w

주어진 6개의 알파벳 중 4개의 알파벳 사용 
모음 최소 1개 자음 최소 2개 
모든 암호 만들어 출력 

aeiou와 자음으로 나누어 담는다. 
- C개의 문자로 만들 수 있는 길이L의 문자를 모두 출력하라. 사전순으로 
- 알파벳은 증가하는 순서로 담긴다. 
- 최소 하나의 모음, 최소 두개의 자음이 포함되어야 한다. 
- 사전순으로 출력한다. 

입력을 나눠담는다. 
시간제한은 2초. 최대 15개의 문자. 

* 모두 만들고 거르기 
모든 조합을 생성하면서 일단 만든다. 
조건에 맞는것만 추가한다. 
정렬해서 출력한다. 
15개인 경우 
15*14*13개의 값
정렬 수행 
될것같은데? 
근데 그만큼 콜을 할 수 있을지는 의문임
중간중간 리턴하고 죽는 콜이 있으니까. 

*/
const [L, C, ...chars] = `4 6
a t c i s w`
  .trim()
  .split(/\s/);
const [l, c] = [Number(L), Number(C)];
const sortedCahrs = chars.sort();
const vowels = ['a', 'e', 'i', 'o', 'u'];
const lines = [];
const t = [];
getLines();
console.log(lines.join('\n'));

function getLines(vc = 0, cc = 0) {
  if (t.length === l) {
    if (1 <= vc && 2 <= cc) {
      lines.push(t.join(''));
      return;
    }
    return;
  }
  for (let i = 0; i < c; i++) {
    const char = sortedCahrs[i];
    if (!t.length || t.at(-1) < char) {
      t.push(char);
      isVowels(char) ? getLines(vc + 1, cc) : getLines(vc, cc + 1);
      t.pop();
    }
  }
}

function isVowels(c) {
  return vowels.includes(c) ? true : false;
}
