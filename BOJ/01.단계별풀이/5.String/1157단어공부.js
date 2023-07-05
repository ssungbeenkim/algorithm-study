// 1157 단어공부 - string
// 입력 받아서 배열에 쪼개서 넣고, 정렬?
// 배열의 값을 하나씩 받아와서 빈 객체에 키값생성하고? 하나식 올려주며 count?
// 배열로 set 만들고 set 으로 일반 객체 만들어서, 하나씩 카운트?
{
  const inputString = `Mississipi`.trim();

  function studyWord(str) {
    const arr = str.toUpperCase().split('');
    const set = new Set(arr);
    const obj = {};
    set.forEach((v) => {
      obj[v] = 0;
    });
    arr.forEach((v) => {
      obj[v]++;
    });

    const valArr = Object.values(obj);
    const valSet = new Set(valArr);
    if (valSet.size !== set.size) {
      console.log(`?`);
    } else {
      const maxVal = Math.max(...Object.values(obj));
      const maxKey = Object.keys(obj).find((key) => obj[key] === maxVal);
      console.log(maxKey);
    }
  } // 틀렸다. 반례: aabbccc인 경우 ? 출력이 된다. 갯수가 같은 알파벳이 있으면 이렇게 되어버리는 것이 문제.

  studyWord(inputString);
}

{
  // 다른 풀이를 참고해서 다시 풀었다. 몇번이고 다시 보기.

  const input = `aaaBB`.toUpperCase();

  const result = new Array(26).fill(0);

  for (let i = 0; i < input.length; i++) {
    result[input.charCodeAt(i) - 65]++;
  }

  const max = Math.max(...result);
  const index = result.indexOf(max);

  let isSame = false;

  for (let j = 0; j < 26; j++) {
    if (result[j] === max && index != j) {
      isSame = true;
      break;
    }
  }

  console.log(isSame ? '?' : String.fromCharCode(index + 65));
}
