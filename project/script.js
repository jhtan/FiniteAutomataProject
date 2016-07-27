/**
 * This code is the implementation of a finite automata that
 * evaluates arithmetic expressions.
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
var number_of_states = 500;
A = {};
for(var i = 0; i < number_of_states; i++) {
    A["q" + i] = new State({lavel: "q" + i, isInitial: false, isAccepting: false});
}

// Creating the transitions.

// First Automata.
for(var i=0; i<9; i++) {
    addTransition("q0", "q1", i+"");
    addTransition("q1", "q1", i+"");
}
addTransition("q1", "q2", "+");
for(var i=0; i<9; i++) {
    addTransition("q2", "q3", i+"");
    addTransition("q3", "q3", i+"");
}
addTransition("q2", "q4", "+");
addTransition("q2", "q6", "=");
addTransition("q3", "q5", "");
addTransition("q4", "q5", "");
for(var i=0; i<9; i++) {
    addTransition("q6", "q7", i+"");
    addTransition("q7", "q7", i+"");
}
addTransition("q7", "q5", "");

// Second Automata.
addTransition("q1", "q22", "-");
for(var i=0; i<9; i++) {
    addTransition("q22", "q23", i+"");
    addTransition("q23", "q23", i+"");
}
addTransition("q22", "q24", "-");
addTransition("q22", "q26", "=");
addTransition("q23", "q25", "");
addTransition("q24", "q25", "");
for(var i=0; i<9; i++) {
    addTransition("q26", "q27", i+"");
    addTransition("q27", "q27", i+"");
}
addTransition("q27", "q25", "");

// Third Automata.
addTransition("q1", "q32", "*");
for(var i=0; i<9; i++) {
    addTransition("q32", "q33", i+"");
    addTransition("q33", "q33", i+"");
}
addTransition("q32", "q36", "=");
addTransition("q33", "q35", "");
for(var i=0; i<9; i++) {
    addTransition("q36", "q37", i+"");
    addTransition("q37", "q37", i+"");
}
addTransition("q37", "q35", "");

// Fourth Automata.
addTransition("q1", "q42", "/");
for(var i=0; i<9; i++) {
    addTransition("q42", "q43", i+"");
    addTransition("q43", "q43", i+"");
}
addTransition("q42", "q46", "=");
addTransition("q43", "q45", "");
for(var i=0; i<9; i++) {
    addTransition("q46", "q47", i+"");
    addTransition("q47", "q47", i+"");
}
addTransition("q47", "q45", "");

// Fifth Automata.
addTransition("q1", "q52", "%");
for(var i=0; i<9; i++) {
    addTransition("q52", "q53", i+"");
    addTransition("q53", "q53", i+"");
}
addTransition("q52", "q56", "=");
addTransition("q53", "q55", "");
for(var i=0; i<9; i++) {
    addTransition("q56", "q57", i+"");
    addTransition("q57", "q57", i+"");
}
addTransition("q57", "q55", "");

// Sixth Automata.
addTransition("q1", "q62", "&");
for(var i=0; i<9; i++) {
    addTransition("q62", "q63", i+"");
    addTransition("q63", "q63", i+"");
}
addTransition("q62", "q64", "&");
addTransition("q62", "q66", "=");
addTransition("q63", "q65", "");
addTransition("q64", "q65", "");
for(var i=0; i<9; i++) {
    addTransition("q66", "q67", i+"");
    addTransition("q67", "q67", i+"");
}
addTransition("q67", "q65", "");

// Seventh Automata.
addTransition("q1", "q72", "|");
for(var i=0; i<9; i++) {
    addTransition("q72", "q73", i+"");
    addTransition("q73", "q73", i+"");
}
addTransition("q72", "q74", "|");
addTransition("q72", "q76", "=");
addTransition("q73", "q75", "");
addTransition("q74", "q75", "");
for(var i=0; i<9; i++) {
    addTransition("q76", "q77", i+"");
    addTransition("q77", "q77", i+"");
}
addTransition("q77", "q75", "");

// Eigth Automata.
addTransition("q1", "q82", "^");
for(var i=0; i<9; i++) {
    addTransition("q82", "q83", i+"");
    addTransition("q83", "q83", i+"");
}
addTransition("q82", "q86", "=");
addTransition("q83", "q85", "");
for(var i=0; i<9; i++) {
    addTransition("q86", "q87", i+"");
    addTransition("q87", "q87", i+"");
}
addTransition("q87", "q85", "");

// Nineth Automata.
addTransition("q1", "q92", "<");
for(var i=0; i<9; i++) {
    addTransition("q92", "q93", i+"");
    addTransition("q93", "q93", i+"");
}
addTransition("q93", "q95", "");
addTransition("q92", "q94", "<");
addTransition("q92", "q96", "=");
addTransition("q94", "q96", "=");
for(var i=0; i<9; i++) {
    addTransition("q94", "q93", i+"");
}
for(var i=0; i<9; i++) {
    addTransition("q96", "q97", i+"");
    addTransition("q97", "q97", i+"");
}
addTransition("q97", "q95", "");




// Setting the Initial States.
var initial_state = "q0";
A[initial_state].isInitial = true;

// Setting the Accepting States.
A["q5"].isAccepting = true;
A["q25"].isAccepting = true;
A["q35"].isAccepting = true;
A["q45"].isAccepting = true;
A["q55"].isAccepting = true;
A["q65"].isAccepting = true;
A["q75"].isAccepting = true;
A["q85"].isAccepting = true;
A["q95"].isAccepting = true;
A["q105"].isAccepting = true;

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
