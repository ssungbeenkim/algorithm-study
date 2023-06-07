/* 
전공평점 구하기. 
학점 * 과목평점의 총함 / 학점의 총합 
등급이 P인 과목은 계산에서 빠져야 한다
입력 : 과목, 학점, 등급 

Map에 등급별 평점 담아두고 
2차원 배열로 받아오고,  
돌면서 등급 p아닌것만 해서 학*과, 학에 각각 더해준다.  
마지막에 학점*과목평점의 총합 / 학점의 총합 으로 계산. 
객체의 키값이 문자열이 아닌 경우 Map을 사용할 수 있음.
*/

const inputArr = `ObjectOrientedProgramming1 3.0 A+
IntroductiontoComputerEngineering 3.0 A+
ObjectOrientedProgramming2 3.0 A0
CreativeComputerEngineeringDesign 3.0 A+
AssemblyLanguage 3.0 A+
InternetProgramming 3.0 B0
ApplicationProgramminginJava 3.0 A0
SystemProgramming 3.0 B0
OperatingSystem 3.0 B0
WirelessCommunicationsandNetworking 3.0 C+
LogicCircuits 3.0 B0
DataStructure 4.0 A+
MicroprocessorApplication 3.0 B+
EmbeddedSoftware 3.0 C0
ComputerSecurity 3.0 D+
Database 3.0 C+
Algorithm 3.0 B0
CapstoneDesigninCSE 3.0 B+
CompilerDesign 3.0 D0
ProblemSolving 4.0 P`
  .split(`\n`)
  .map((v) =>
    v.split(' ').map((v) => {
      if (isNaN(Number(v))) {
        return v;
      } else {
        return Number(v);
      }
    })
  );

const scoreMap = new Map([
  ['A+', 4.5],
  ['A0', 4.0],
  ['B+', 3.5],
  ['B0', 3.0],
  ['C+', 2.5],
  ['C0', 2.0],
  ['D+', 1.5],
  ['D0', 1.0],
  ['F', 0.0],
]);

let hMulGSum = 0;
let hSum = 0;

inputArr.forEach((v) => {
  if (v[2] !== 'P') {
    hSum += v[1];
    hMulGSum += v[1] * scoreMap.get(v[2]);
  }
});
console.log(hMulGSum / hSum);

// 원래 객체에 등급: 과목평점 으로 key, value를 주어 하려 했으나 key값이 문자열이 아니라 문제가 발생해서 이렇게 풀었다.
