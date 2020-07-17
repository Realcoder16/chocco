
//Первый вариант

//const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
//const isEven = num => {
//const filterArray = [];
//num.forEach(element => {
//if (element % 2 == 0) {
//  filterArray.push(element)
//  }
//});

//return filterArray

//};





//console.log(isEven(mixedArray)); 



//Второй вариант
const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {

  if (num % 2 == 0) {
    return true
  }

}

const filterArray = arr => {
const Array = [];
  arr.forEach(element => {
    if (isEven(element)) {
      Array.push(element)
    }
  });

  return Array;

}

console.log(filterArray(mixedArray));
