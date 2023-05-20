const enum Direction {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}
const enum TimingFunc {
    EASE = 1,
    EASE_IN = 2,
    LINEAR = 5,
    ERROR = EASE*EASE_IN*LINEAR
}

function frame(elem: string, dir: Direction, tFunc: TimingFunc): void {
  if (dir === Direction.BOTTOM) {
    console.log(tFunc);
  }
}
frame("id", Direction.BOTTOM, TimingFunc.ERROR);
