const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 },
  { "name": "Mark", "salary": 2 },
  { "name": "Dron", "salary": 3000 },
  { "name": "Arseniy", "salary": 1000000}];

const getWorthyWorkers = function (Worthy) {
  const workers1 = [];
  for (i = 0; i < Worthy.length; i++) {

    var namenew = Worthy[i].name;

    if (workers[i].salary >= 1000) {
      workers1.push(namenew);
    }

  }


  return workers1;
}


console.log(getWorthyWorkers(workers));