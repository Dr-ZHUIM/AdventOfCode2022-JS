import {getPointSum,getPointSum2} from ".";
import fs from "fs";
import path from "path";
const dataPath = path.join(__dirname,"./test.text");

describe ("Part I: Get the point", () => {
  test('Sum', () => {
      expect(getPointSum(dataPath)).toBe(157);
    })
});

describe ("Part II: Get the point2", () => {
  test('Sum', () => {
      expect(getPointSum2(dataPath)).toBe(70);
    })
});