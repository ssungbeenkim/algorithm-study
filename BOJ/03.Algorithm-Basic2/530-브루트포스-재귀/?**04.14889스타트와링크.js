/* 
1. 들어온 수/2 = 한 팀의 팀원 수
2. 두팀으로 나눌 때의 경우의 수. 4명이라 치면 ab ac ad 그리고 반대편 3가지가 나온다. 
3. 나눈 경우의 수들을 활용해 점수를 계산하며 최소차이값을 업데이트해야함.
  한팀에 3명인 경우 abc라 치면 [a][b]+[b][a] [b][c]+[c][b] + ... 
  이런식으로 구할 수 있게 만들어야 함. 
*/
// 14프로에서 틀린다. 다른사람들도 14프로에서 틀리는 경우가 많은것 같다. 다른 풀이를 참고한다.
{
  const [n, ...matLines] = `6
  0 1 2 3 4 5
  1 0 2 3 4 5
  1 2 0 3 4 5
  1 2 3 0 4 5
  1 2 3 4 0 5
  1 2 3 4 5 0`
    .trim()
    .split('\n');
  const mat = matLines.map((v) => v.split(' ').map(Number));
  console.log(mat);
  let minDiff = Number.MAX_SAFE_INTEGER;
  const t = [0];
  updateMinDiffWithTeams();
  console.log(minDiff);

  function updateMinDiffWithTeams() {
    if (t.length === n / 2) {
      const team = [...t];
      const opposite = [];
      for (let i = 0; i < n; i++) {
        team.includes(i) || opposite.push(i);
      }
      updateMinDiff([team, opposite]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (t.at(-1) < i) {
        t.push(i);
        updateMinDiffWithTeams();
        t.pop(i);
      }
    }
  }

  function updateMinDiff(teamTable) {
    const [t1, t2] = teamTable;
    const scoreA = getAccScore(t1);
    const scoreB = getAccScore(t2);
    const dif = Math.abs(scoreA - scoreB);
    minDiff = Math.min(dif, minDiff);
  }

  function getAccScore(team) {
    let acc = 0;
    for (let i = 0; i < n / 2; i++) {
      if (i === n / 2 - 1) {
        acc += mat[team[i]][team[0]] + mat[team[0]][team[i]];
      } else {
        acc += mat[team[i]][team[i + 1]] + mat[team[i + 1]][team[i]];
      }
    }
    return acc;
  }
}

/* 
우선 문제가 있기는 한게, 중복계산을 하고 있다.  
첫 자리를 0으로 넣어두면 오름차순으로 들어가면서 조합의 경우를 뽑을 수 있다. 
근데 왜 틀린것일까? 놓친 조건이라도 있는건가?
*/
