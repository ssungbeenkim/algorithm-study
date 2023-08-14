function getGCD(num1, num2) {
  return num2 !== 0 ? getGCD(num2, num1 % num2) : num1;
}

function getGCD2(n1, n2) {
  while (n2 !== 0) {
    let r = n1 % n2;
    n1 = n2;
    n2 = r;
  }
  return n1;
}

function getLCM(num1, num2) {
  const gcd = getGCD(num1, num2);
  return (num1 * num2) / gcd;
}

function getLCM2(num1, num2) {
  let gcd = num1;
  let r = num2;
  while (r !== 0) {
    let temp = gcd % r;
    gcd = r;
    r = temp;
  }
  return (num1 * num2) / gcd;
}

console.log(getGCD(90, 100));
console.log(getGCD2(90, 100));

console.log(getLCM(2, 4));
console.log(getLCM2(2, 4));
