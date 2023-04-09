import fs from "fs";

function readAndhandleData(path){
  const data = fs.readFileSync(path,{encoding: "utf8"});
  const strategy = data.split("\n").map(round => round = round.split(" "));
  return strategy;
}

export function getPoint(path){
  const strategy = readAndhandleData(path);
  const scores = {
    A: {X: 3, Y: 6, Z: 0 },
    B: {X: 0, Y: 3, Z: 6},
    C: { X: 6, Y: 0, Z: 3}
  };
  const values = { X: 1, Y: 2, Z: 3 };
  const point = strategy.reduce((pre,cur)=>{
    const [opponent,player] = cur;
    return pre += scores[opponent][player] + values[player]
  },0);
  return point;
}

export function getPoint2(path){
  const strategy = readAndhandleData(path);
  const scores = { X: 0, Y: 3, Z: 6 }
  const values = {
    A: { X: 3, Y: 1, Z: 2 },
    B: { X: 1, Y: 2, Z: 3 },
    C: { X: 2, Y: 3, Z: 1 },
  }  
  const point = strategy.reduce((pre,cur)=>{
    const [opponent,player] = cur;
    return pre += scores[player] + values[opponent][player]
  },0);
  return point;
}

// console.log('getPoint("./input.text")',getPoint2("./input.text"))


/**
 * Player
 * X Rock - 1
 * Y Paper - 2
 * Z Scissors - 3
 * 
 * Opponent 
 * A Rock 
 * B Paper
 * C Scissors
 * 
 * Ruler
 * win 6
 * draw 3
 * lost 0
 */