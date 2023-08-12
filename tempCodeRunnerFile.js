// 모든 모양에 대하여 max를 업데이트
shapes.forEach((s) => {
  max = Math.max(max, returnMax(s));
});

console.log(max);
