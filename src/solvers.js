/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});
  var matrixArr = [];
  var rookCount = 0;
  var permutations = [];

  // for (var row = 0; row < solution.length; row++) {
  //   for (var column = 0; column < solution.length; column++) {
  //     var currentSquare = solution[row][column];
  //     currentSquare = 1;
  //     matrixArr.push(solution);
  //   }
  // }

  // var innerFunction(board){
  //   board = board || makeEmptyMatrix(n);

  //   if (!board.hasAnyRooksConflicts()) {
  //     permutations.push[board];
  //   }
  //   matrixArray.forEach(function(topBoard){
  //     for (var row = 0; row < solution.length; row++) {
  //       for (var column = 0; column < solution.length; column++) {
  //         var currentSquare = board[row][column];

  //       }
  //     }
  //   })
  // }
  // innerFunction(solution)

  var boardBuilder = function(board) {
    board = board || makeEmptyMatrix(n);
    if (rookCount === n) {
      return board;
    }
    for (var row = 0; row < board.length; row++) {
      for (var column = 0; column < board.length; column++) {
        var currentSquare = board[row][column];
        if (!currentSquare) {
          currentSquare = 1;
          rookCount++
        }
        //check conflicts true false
        //if true
          //remove rook and rookCount--
        if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()) {
          currentSquare = 0;
          rookCount--;
        } else {
        //if false
          //recursively call innerFunction on current board
          boardBuilder(board);
        }
      }
    }
  }
  var solution = boardBuilder();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
