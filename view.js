


var boardView = {

  model: solver,

  init: function() {
    console.log('here'); 
    this.$grid = $('#board-grid');
    console.log(this.$grid); 

    for( var row = 0; row < this.model.size; row++ ) {
      var $rowDiv = $('<div>');
      for( var col = 0; col < this.model.size; col++ ) {
        var $squareDiv = $('<div>');

        var squareIndex = row * this.model.size + col;
        $squareDiv.addClass('square');
        if( (row + col) % 2 === 0 ) {
          $squareDiv.addClass('dark-square');
        } else {
          $squareDiv.addClass('light-square');          
        }

        $squareDiv.attr('id', 'square-' + squareIndex );
        $rowDiv.append( $squareDiv );
      }
      this.$grid.append( $rowDiv );
    }
  },


  showSolution: function() {

    for( var square in  this.model.solution ) {
      var idString = '#square-' + this.model.solution[square];
      $(idString).addClass('has-queen');
    }
  }

};
