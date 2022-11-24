function insertAtBeginning<T>(arr: T[], value: T) {
  const newArr = [value, ...arr];
  return newArr;
}

const demoArr = [1, "sting", true];
const testArr = insertAtBeginning(demoArr, 1);

console.log(testArr);
