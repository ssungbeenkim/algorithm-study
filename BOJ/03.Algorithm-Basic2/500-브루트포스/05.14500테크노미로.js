/* 테크노미로 - 30분
모양별로 객체에 4*4에서 차지하는 좌표 저장. rotate, flip 함수 만들어서 돌리기?
굳이 4*4로 하지 않고 모양에 맞게, w,h값을 가지고 있고, filp, rotate로 처리해 줄 수 있다면. 
shape별로 처리하면서 입력값에 접근해서 (w,h값으로 적절히 돌 수 있을것)
합의 값을 업데이트하면 될 것이다. 
*/

const shape1 = {
  w: 4,
  h: 1,
  c: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
};

const shape2 = {
  w: 2,
  h: 2,
  c: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
};

const shape3 = {
  w: 2,
  h: 3,
  c: [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
};

const shape4 = {
  w: 2,
  h: 3,
  c: [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
};

const shape5 = {
  w: 2,
  h: 3,
  c: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
};

function flipX(shape) {
  const newShape = {
    ...shape,
  };

  return newSahpe;
}

function flipY(shape) {}

function rotate(shape) {}
