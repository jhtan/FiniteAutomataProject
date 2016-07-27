/**
 * This code is the implementation of a finite automata that
 * evaluates aritmetic expretions.
 * 
 * Author: Jhonatan I. Castro Rocabado.
 * Date: 7 / 27 / 2016
 *
**/

// State Object Constructor.
function State(args) {
    this.lavel = args.lavel;
    this.isInitial = args.isInitial;
    this.isAccepting = args.isAccepting;
    this.symbols = new Array();
    this.transitions = new Array();
}

// Function that add a transition between states.
function addTransition (a, b, symbol) {
    A[a].transitions.push(b);
    A[a].symbols.push(symbol);
}

// Creating the states.
var number_of_states = 8;
A = {};
for(var i = 0; i < number_of_states; i++) {
    A["q" + i] = new State({lavel: "q" + i, isInitial: false, isAccepting: false});
}

// Creating the transitions.
addTransition("q0", "q1", "0");
addTransition("q1", "q2", "+");
addTransition("q2", "q3", "0");
addTransition("q2", "q4", "+");
addTransition("q2", "q6", "=");
addTransition("q3", "q5", "");
addTransition("q4", "q5", "");
addTransition("q6", "q7", "0");
addTransition("q7", "q5", "");

// Setting the Initial States.
var initial_state = "q0";
A[initial_state].isInitial = true;

// Setting the Accepting States.
A["q5"].isAccepting = true;

// Function that triggers when the expression is changed on the textbox.
function evalExpression() {
    var s = document.getElementById("expression").value;
    console.log(s);

    if(isAccepted(s, initial_state)) {
	console.log("AC");
	document.getElementById("result").innerHTML = "Cadena aceptada! :v";
	document.getElementById("result").style.color = "green";
    } else {
	console.log("NOAC");
	document.getElementById("result").innerHTML = "Cadena no aceptada! :c";
	document.getElementById("result").style.color = "red";
    }
}

// This function evaluate if a string is accepted with the current automata.
function isAccepted(s, state) {
    console.log("s = " + s);
    console.log("state = " + state);
    if(s.length === 0) {
	// lambda transitions.. o_O
	for(var i=0; i<A[state].symbols.length; i++) {
	    if(A[state].symbols[i].length == 0) {
		return isAccepted("", A[state].transitions[i]);
	    }
	}
	
	return A[state].isAccepting;
    } else {
	for(var i=0; i<A[state].symbols.length; i++) {
	    if(A[state].symbols[i] == s[0]) {
		return isAccepted(s.substring(1), A[state].transitions[i]);
	    }
	}

	return false;
    }
}
