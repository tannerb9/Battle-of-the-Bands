// Your job is to write a function that accepts any band name as an argument. The
// function will increment a global variable by one each time it is invoked,
// and return that number, and the band name concatenated together.

let bandNumber = 1;

const takeNumber = function (bandName) {
  console.log(`${bandNumber}. ${bandName}`);
  bandNumber++;
};

takeNumber("Battle Cats");
takeNumber("Feral Felines");
