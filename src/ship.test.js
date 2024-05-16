import { Ship } from "./ship";

let foo = Ship(2);
foo.hit();
foo.hit();

let goo = Ship(3);
goo.hit();

test("return object", () => {
  expect(foo.getShip()).toEqual({
    length: 2,
    hitCount: 2,
    sunk: true,
    orientation: "horizontal",
  });
});

test("return true", () => {
  expect(foo.isSunk()).toBe(true);
});

test("return false", () => {
  expect(goo.isSunk()).toBe(false);
});
