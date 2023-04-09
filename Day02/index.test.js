import {getPoint,getPoint2} from ".";
import fs from "fs";
import path from "path";
const dataPath = path.join(__dirname,"./test.text");

describe ("Part I: Get the point", () => {
  test('Sum', () => {
      expect(getPoint(dataPath)).toBe(15);
    })
});

describe ("Part II: Get the point2", () => {
  test('Sum', () => {
      expect(getPoint2(dataPath)).toBe(12);
    })
});