var taSol1, taSol2, taSol3;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taSol1 = document.getElementById('ta_sol1');
	taSol2 = document.getElementById('ta_sol2');
	taSol3 = document.getElementById('ta_sol3');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runEmAll(){
	console.log("Running All Solutions")
	taSol1.value = ""; 	taSol2.value = ""; 	taSol3.value = "";
	var start;
	var end;
	var n=4;
	var xval = [];
	var ysal1 = [];
	var ysal2 = [];
	var ysal3 = [];
	for (var k = 4; k <= 16; k++) {
		xval.push(k);
		//Runs each solution and measures performance in microseconds
		console.log("In Forloop: Line 18, k = "+k+"\n");
		start = performance.now();
		sol1(n);
		end = performance.now();
		taSol1.value+= ""+n+", "+(end-start)*1000+"\n";
		ysal1.push((end-start)*1000);
		
		start = performance.now();
		sol2(n);
		end = performance.now();
		taSol2.value+= ""+n+", "+(end-start)*1000+"\n";
		ysal2.push((end-start)*1000);
		
		start = performance.now();
		sol3(n);
		end = performance.now();
		taSol3.value+= ""+n+", "+(end-start)*1000+"\n";
		n = n * 2;
		}//end for
		
		console.log(xval);


var trace1 = {
  x: xval,
  y: ysal1,
  type: 'scatter',
  name : 'brute-force'
};

var trace2 = {
  x: xval,
  y: ysal2,
  type: 'scatter',
  name : 'back-tracking'
};


var layout = {
  title:'nQueen Problem Timing Analysis'
};

var data = [trace1, trace2];
Plotly.newPlot('myDiv', data,layout);
}//end runEmAll

function sol1(n){
	//Implement your brute-force solution here


	//console.log(([(- 1)] * 8));
	new NQueens(8);

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1

function sol2(n){
	//Implement your recursive back-tracking solution here

	 console.log(rb_queenPuzzle(8,8));

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol2

function sol3(n){
	//Implement your dynammic programming solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for(var k=0;k<50;k++);
	}//end for j
	//--End of Garbage Code--//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol3


/////Recursive Back-tracking////
function rb_queenPuzzle(rows, columns) {
    if (rows <= 0) {
        return [[]];
    } else {
        return rb_addQueen(rows - 1, columns);
    }
}
 
function rb_addQueen(newRow, columns, prevSolution) {
    var newSolutions = [];
    var prev = rb_queenPuzzle(newRow, columns);
    for (var i = 0; i < prev.length; i++) {
        var solution = prev[i];
        for (var newColumn = 0; newColumn < columns; newColumn++) {
            if (!rb_hasConflict(newRow, newColumn, solution))
                newSolutions.push(solution.concat([newColumn]))
        }
    }
    return newSolutions;
}
 
function rb_hasConflict(newRow, newColumn, solution) {
    for (var i = 0; i < newRow; i++) {
        if (solution[i]     == newColumn          ||
            solution[i] + i == newColumn + newRow || 
            solution[i] - i == newColumn - newRow) {
                return true;
        }
    }
    return false;
}


/* The n queens puzzle. */
class NQueens {
    /* Generate all valid solutions for the n queens puzzle */
    constructor(size) {
        this.size = size;
        this.solutions = 0;
        this.solve();
    }
    solve() {
        /* Solve the n queens puzzle and print the number of solutions */
        var positions;
        positions = 8;//([(- 1)] * this.size);
        this.put_queen(positions, 0);
        console.log("Found", this.solutions, "solutions.");
    }
    put_queen(positions, target_row) {
        /*
        Try to place a queen on target_row by checking all N possible cases.
        If a valid place is found the function calls itself trying to place a queen
        on the next row until all N queens are placed on the NxN board.
        */
        if ((target_row === this.size)) {
            this.show_full_board(positions);
            this.solutions += 1;
        } else {
            for (var column = 0, _pj_a = this.size; (column < _pj_a); column += 1) {
                if (this.check_place(positions, target_row, column)) {
                    positions[target_row] = column;
                    this.put_queen(positions, (target_row + 1));
                }
            }
        }
    }
    check_place(positions, ocuppied_rows, column) {
        /*
        Check if a given position is under attack from any of
        the previously placed queens (check column and diagonal positions)
        */
        for (var i = 0, _pj_a = ocuppied_rows; (i < _pj_a); i += 1) {
            if ((((positions[i] === column) || ((positions[i] - i) === (column - ocuppied_rows))) || ((positions[i] + i) === (column + ocuppied_rows)))) {
                return false;
            }
        }
        return true;
    }
	
    show_full_board(positions) {
        /* Show the full NxN board */
        var line;
        for (var row = 0, _pj_a = this.size; (row < _pj_a); row += 1) {
            line = "";
            for (var column = 0, _pj_b = this.size; (column < _pj_b); column += 1) {
                if ((positions[row] === column)) {
                    line += "Q ";
                } else {
                    line += ". ";
                }
            }
            console.log(line);
        }
        console.log("\n");
    }
	
    show_short_board(positions) {
        /*
        Show the queens positions on the board in compressed form,
        each number represent the occupied column position in the corresponding row.
        */
        var line;
        line = "";
        for (var i = 0, _pj_a = this.size; (i < _pj_a); i += 1) {
            line += (positions[i].toString() + " ");
        }
        console.log(line);
    }
}