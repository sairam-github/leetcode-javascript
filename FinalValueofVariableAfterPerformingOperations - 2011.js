var finalValueAfterOperations = function (operations) {
  let result = 0;

  operations.forEach(function (op) {
    if (op === "X++" || op === "++X") {
      result++;
    } else {
      result--;
    }
  });

  return result;
};

let result = finalValueAfterOperations(["X++", "++X", "--X", "X--"]);
console.log(result);
