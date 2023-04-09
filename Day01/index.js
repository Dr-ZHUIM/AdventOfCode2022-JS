export function findTheMostCalories(data){
  const elives = data.split("\n\n").map(elf => elf.split("\n").map(food =>Number(food)));
  const max = elives.reduce((pre,cur) => findTheMaxSum(pre,cur),0);
  return max;
}

export function findTheThreeMostCalories(data){
  const elives = data.split("\n\n").map(elf => elf.split("\n").map(food =>Number(food)));
  const calories = elives.map(elf => calSum(elf) );
  return findTheThreeMaxSum(calories);
}

function findTheMaxSum(pre,cur){
  let sum = calSum(cur);
  if(sum > pre)return sum;
  return pre;
}

function findTheThreeMaxSum(arr){
  const _arr = arr.sort((a,b) => b - a);
  return _arr[0] + _arr[1] + _arr[2];
};

function calSum (data){
  let sum = 0;
  data.forEach(el => sum += el);
  return sum;
}

