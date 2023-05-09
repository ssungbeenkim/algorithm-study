const [a1, a0, n0, c] = `7 7
8
1`
  .split(/\s/)
  .map(Number);

function printResult() {
  for (n = n0; n <= 100; n++) {
    if ((a1 - c) * n + a0 > 0) {
      console.log(0);
      return;
    }
  }
  console.log(1);
}

printResult();

// 왜 틀린건지 내일 다시 점검해보도록 하자.
