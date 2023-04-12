import {handleQuestion1,handleQuestion2} from ".";
import fs from "fs";
import path from "path";
const dataPath = path.join(__dirname,"./test.text");

describe ("Part I: Get the point", () => {
  test('Sum', () => {
      expect(handleQuestion1(dataPath)).toBe(2);
    })
});

describe ("Part II: Get the point2", () => {
  test('Sum', () => {
      expect(handleQuestion2(dataPath)).toBe(4);
    })
});