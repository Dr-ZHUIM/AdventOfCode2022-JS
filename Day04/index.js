import fs from "fs";

function readAndhandleData(path){
  const data = fs.readFileSync(path,{encoding: "utf8"});
  const res = data.split("\n").map(elive => elive.split(",").map(str => str.split("-").map(st => st = Number(st))));
  return res;
}

export function handleQuestion1(path){
  let groupsNum = 0;
  const data = readAndhandleData(path);
  data.map(group => {
    const [[min1,max1],[min2,max2]] = group;
    if((min1 <= min2 && max1 >= max2) || (min2 <= min1 && max2 >= max1))groupsNum++;
  });
  return groupsNum;
}

export function handleQuestion2(path){
  let groupsNum = 0;
  const data = readAndhandleData(path);
  data.map(group => {
    const [[min1,max1],[min2,max2]] = group;
    if(min1 <= min2 && max1 >= min2 || min2 <= min1 && max2 >= min1)groupsNum++;
  });
  return groupsNum;
}

console.log('handleQuestion2("./input.text")',handleQuestion2("./input.text"))