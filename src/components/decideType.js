export const decideType = s => {
  let type = "Bill says it's ";
  if (s.leftSide > 0 && s.rightSide > 0 && s.bottomSide > 0) {
    if (s.leftSide === s.rightSide && s.bottomSide === s.rightSide) {
      type = type.concat("Equilateral!!!");
    } else if (
      s.leftSide === s.rightSide ||
      s.bottomSide === s.rightSide ||
      s.bottomSide === s.leftSide
    ) {
      type = type.concat("Isosceles!!!");
    } else if (s.leftSide !== s.rightSide && s.bottomSide !== s.rightSide) {
      type = type.concat("Scalene!!!");
    }
    return type;
  }
  return "Bill is waiting..";
};
