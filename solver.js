
var solver = {
  size: 8,
  squares: [],
  numSolutions: 0,
  solution: [],

  init: function( size ) {
    this.size = size;
    for( var i = 0; i < Math.pow(this.size, 2); i++ ) {
      this.squares.push(i);
    }
  },

  rowNumber: function(  i ) {
    return Math.floor( i / this.size );
  },

  colNumber: function(i) {
    return i % this.size;
  },

  removeAdjacent: function( queen, available ) {
    var modelContext = this;
    var newRow = this.rowNumber( queen );
    var newCol = this.colNumber( queen);

    return available.filter( function(item){
      return ( modelContext.rowNumber( item ) !== newRow && modelContext.colNumber( item ) !== newCol &&
       modelContext.rowNumber( item ) + modelContext.colNumber( item ) !== newRow + newCol && 
       modelContext.rowNumber( item ) - modelContext.colNumber( item ) !== newRow - newCol );
    });
  },

  solve: function() {
    this.iterateSolver( this.squares.slice(), [], 0 );

    if( this.numSolutions > 0 ) {
      // this.solution = this.solutions[this.solutions.length - 1];
      console.log( "solved", this.numSolutions );           
    } else {
      console.log("no solutions");
    }

  },

  iterateSolver: function(  available, partialSoln, currentRowNum ) {
    if( partialSoln.length === this.size ) {
      this.numSolutions++;
      this.solution = partialSoln;
      return true;
    }
    if (available.length <=0 ) {
      return false;
    }
    var newQueen;
    while( available[0] < (currentRowNum + 1) * this.size ) {
      newQueen = available[0];
      var newAvailable = this.removeAdjacent( newQueen, available );
      var newPartial = partialSoln.slice();
      newPartial.push( newQueen );
      this.iterateSolver( newAvailable, newPartial, currentRowNum + 1 );
      available.shift();
    }
    return false;
  },


};