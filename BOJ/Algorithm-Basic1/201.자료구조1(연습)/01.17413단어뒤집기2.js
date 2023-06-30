// 단어를 뒤집는다. 대신 태그 안에 있는게 아닌 것만.
// 정규표현식으로 불러와서 바꿀 수 있나?

const input = `$<ab cd>ef gh<ij kl>`.trim();
const regex = /<[a-z\s]+>|[a-z0-9]+/g;

const answer = input.replace(regex, (w) => {
  return w.startsWith('<') ? w : w.split('').reverse().join('');
});

console.log(answer);

// String.prototype.replace() 로 정규표현식, 콜백 함수로 간단하게 문자열을 바꿀 수 있다.
