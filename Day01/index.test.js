import {findTheMostCalories,findTheThreeMostCalories} from ".";
import fs from "fs";
import path from "path";
const dataPath = path.join(__dirname,"./test.text");
const data = fs.readFileSync(dataPath, "utf8");

describe ("Part I: Find the most funny elf", () => {
  test('find the max num', () => {
      expect(findTheMostCalories(data)).toBe(24000);
    })
});

describe("Part II: Find the three most funny elives", () => {
  test('find the max num', () => {
    expect(findTheThreeMostCalories(data)).toBe(45000)
  })
})