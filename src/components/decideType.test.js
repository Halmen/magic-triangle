import { decideType } from "./decideType";

test("test case : no result", () => {
  expect(
    decideType({
      leftSide: 4,
      rightSide: 0,
      bottomSide: 1
    })
  ).toBe("Bill is waiting..");
});

test("test case : equilateral", () => {
  expect(
    decideType({
      leftSide: 4,
      rightSide: 4,
      bottomSide: 4
    })
  ).toBe("Bill says it's Equilateral!!!");
});

test("test case : isosceles", () => {
  expect(
    decideType({
      leftSide: 5,
      rightSide: 3,
      bottomSide: 5
    })
  ).toBe("Bill says it's Isosceles!!!");
});

test("test case : scalene", () => {
  expect(
    decideType({
      leftSide: 9,
      rightSide: 3,
      bottomSide: 7
    })
  ).toBe("Bill says it's Scalene!!!");
});
