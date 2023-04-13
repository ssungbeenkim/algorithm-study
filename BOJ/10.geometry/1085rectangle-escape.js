const arr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);
function findMinDistance(x, y, w, h) {
  const minDistance = Math.min(x, y, w - x, h - y);
  return minDistance;
}

console.log(findMinDistance(...arr));
