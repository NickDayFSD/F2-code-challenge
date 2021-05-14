export function returnTen(str) {
  return str.split('').slice(-10);
}

export function findMax(matrix) {
  const highNum = [];
  matrix.forEach(arr => {
    highNum.push(Math.max(...arr));
  });
  return Math.max(...highNum);
}

export function totalSum(matrix) {
  let totalSum = 0;
  matrix.forEach(arr => {
    totalSum += arr.reduce((a, b) => a + b);
  });
  return totalSum;
}

export function grandTotal(stores) {
  const results = [];
  //loop through 12 hrs

  return results;
}

export function salesData(hours, data) {

}