// part I
export function findTheMostCalories(data){
  const calories = solveData(data)
  return Math.max(...calories);
}

// part II 
export function findTheThreeMostCalories(data){
  const calories = solveData(data)
  return findTheThreeMaxSum(calories);
}

// sort function
function findTheThreeMaxSum(arr){
  const _arr = arr.sort((a,b) => b - a);
  return _arr[0] + _arr[1] + _arr[2];
};

function solveData(data){
  const elives = data.split("\n\n").map(elf => elf.split("\n").map(food =>Number(food)));
  const calories = elives.map(elf => {
    let sum = 0;
    elf.forEach(el => sum += el);
    return sum;
  });
  return calories;
}
