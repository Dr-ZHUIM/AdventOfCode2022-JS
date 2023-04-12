import fs from "fs";

function rotateStr(str){
  const newStrArr = [];
  const strArr = str.split("\n");
  strArr.forEach((str,index) => {
    str.split("").forEach((s,sIndex) => {
      if(!newStrArr[sIndex])newStrArr[index]="";
      newStrArr[sIndex] += s
      console.log('newStrArr[index]',newStrArr[index])
    })
  });
  return newStrArr;
}

function readData(path){
  const data = fs.readFileSync(path,{encoding: "utf8"});
  const [stacksStr,worksStr] = data.split("\n\n");
  const stacks = rotateStr(stacksStr)
  console.log('stacks',stacks)
}

readData("./test.text");