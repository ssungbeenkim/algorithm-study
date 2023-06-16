// {
//   const inpt = `15 28 19`.trim().split(/\s/).map(Number);

//   const arr = [0, 0, 0];
//   let count = 0;
//   while (true) {
//     arr.forEach((_, i) => {
//       arr[i]++;
//     });
//     count++;
//     if (arr[0] === 16) {
//       arr[0] = 1;
//     }
//     if (arr[1] === 29) {
//       arr[1] = 1;
//     }
//     if (arr[2] === 20) {
//       arr[2] = 1;
//     }
//     if (arr.join(' ') === inpt.join(' ')) {
//       console.log(count);
//       break;
//     }
//   }
// } // 맞는것 같으니 메모리 초과. 성능 개선을 해봐야 할 것 같다.

{
  // const inpt = `15 28 19`.trim().split(/\s/).map(Number);
  // const arr = [0, 0, 0];
  // let count = 0;
  // while (true) {
  //   arr.forEach((v, i) => {
  //     if (i === 0 && v === 15) {
  //       arr[i] = 1;
  //     } else if (i === 1 && v === 28) {
  //       arr[i] = 1;
  //     } else if (i === 2 && v === 19) {
  //       arr[i] = 1;
  //     } else {
  //       arr[i]++;
  //     }
  //   });
  //   count++;
  //   if (arr.join(' ') === inpt.join(' ')) {
  //     console.log(count);
  //     break;
  //   }
  // }
} // 시간초과

{
  const [x, y, z] = `15 28 19`.trim().split(/\s/).map(Number);
  let a = 0;
  let b = 0;
  let c = 0;
  let count = 0;
  while (!(a == x && b == y && c == z)) {
    a = a == 15 ? 1 : a + 1;
    b = b == 28 ? 1 : b + 1;
    c = c == 19 ? 1 : c + 1;
    count++;
  }
  console.log(count);
}

// 게시판 등을 보니 문항 자체에 문제가 있는 것 같다. pass
