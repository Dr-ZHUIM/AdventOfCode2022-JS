import fs from "fs";

function readAndhandleData1(path){
  const data = fs.readFileSync(path,{encoding: "utf8"});
  const strategy = data.split("\n").map(round => round = [round.slice(0,round.length / 2),round.slice(-round.length/2)]);
  return strategy;
}

function readAndhandleData2(path){
  const data = fs.readFileSync(path,{encoding: "utf8"});
  const allElvies = data.split("\n");
  const elfGroups = [];
  allElvies.map((elf,index)=>{
    const groupIndex = Math.floor(index / 3);
    if(!elfGroups[groupIndex]){
      elfGroups[groupIndex] = [];
    }
    elfGroups[groupIndex].push(elf)
  });
  return elfGroups;
}

function calPoint(code){
  const ASCIInum = code.charCodeAt();
  return ASCIInum > 96 ? ASCIInum - 96 : ASCIInum - 38;
}

export function getPointSum(path){
  const rucksack = readAndhandleData1(path);
  let pointSum = 0;
  rucksack.forEach(compartment => {
    const items = new Set();
    const [fir,sec] = compartment;
    for(let i = 0; i < fir.length; i++){
      if(items.has(fir[i]))break;
      for(let j = 0; j < sec.length; j++){
        fir[i] === sec[j] && items.add(fir[i]);
      }
    }
    items.forEach(item => pointSum += calPoint(item))
  });
  return pointSum;
}

export function getPointSum2(path){
  const elfGroups = readAndhandleData2(path);
  let pointSum = 0;
  elfGroups.forEach(group => {
    const items = new Set();
    const [a,b,c] = group;
    for(let i = 0; i < a.length; i++){
      if(items.has(a[i]))break;
      b.indexOf(a[i]) > -1 && c.indexOf(a[i]) > -1 && items.add(a[i])
    };
    items.forEach(item => pointSum += calPoint(item))
  });
  return pointSum;
}

