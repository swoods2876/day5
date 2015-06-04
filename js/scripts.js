//this is a comment

alert( "hello world");

console.log ("hello world ppp ;)");

document.getElementById("monitor").innerHTML = "HI :)";

// below are three varible declarations, I declared the varible name and assigned "stephen" as the value.

var name = "stephen";
var numberOfWidgets = 10;
var isCodingCool = true;

console.log (name);
console.log (numberOfWidgets);
console.log (isCodingCool);

var w = 10;
var h = 20;

console.log("W: " + w);
console.log("H: " + h);

console.log("---------");

console.log("TOTAL: " + w + h );



function addPounds(){
	w = w+1;
	console.log("Al is " + w + "pounds heavier!" );
}
//arrayception: there are multiddimensional arrays and polymorphic arrays.

var music = ["Heavy Metal", "Dupstep", "Rock"];
var instruments = ["Guitar", "drums", "bass"];

var hobbies = [music, instruments];

console.log( hobbies[0]); //why does this display all of the items  and not "Heavy Metal";

console.log( hobbies[1] [1]);

//declare your multi-dimensional array;

var cars = [["Porsche","Camero"], ["Camery", "Prius"]];

//access the first array inside;
//then the first item inside the array;

console.log(cars[0] [0]);

console.log(cars[1] [0]);






//erercise 1;
var num1 = 30;
var num2 = 4;
var numTotal = num1 + num2

console.log("Total:" + numTotal)

//exercise 2; 

var fName = "stephen";
var lName = "woods";
var space = " ";

alert(fName + space + lName);

//exercise 3;

var frontEndTech = ["HTML", "CSS", "JS"];
var frontEndConcept = ["Content and Structure", "Aesthetics", "Information Flow"];
var frontEnd = [frontEndTech, frontEndConcept]

console.log ( frontEnd[0] [0]); //outputs HTML
console.log ( frontEnd[1] [0]); //outputs "Concept and Structure"

//var person = ["stephen" 39, true, ["guitar","drums"] ]; //this is a polymorphic array it has a string, it has a number, it has a boolean and it has an array. 4 elemnets



console.log("-----logic-----");
console.log(5 != "5");
console.log(5 !== "5");
console.log(5 < "5");
console.log(5 <= "5");
console.log(5 > "5");
console.log(5 >= "5");

if(11<10){
	console.log("5 is less than 10");
}else if(0<1){
	console.log("0 is less than 1");
}else{
	alert("sorry!")
}

var isLightOn = true;
var isTuesday = false;

if(isLightOn || isTuesday){
	document.getElementById("monitor").innerHTML ="THE LIGHT IS ON";
	document.getElementById("body").style.backgroundColor ="yellow";
	if(true){
}else{

	if(true){

	}else if(true){


     }else{

     }
}

}else{
	document.getElementById("monitor").innerHTML ="THE LIGHT IS OFF";
	document.getElementById("body").style.backgroundColor ="black";


}

function turnLightOff(){
document.getElementById("body").style.backgroundColor ="black";

}
function turnLightOn(){
document.getElementById("body").style.backgroundColor ="yellow";

}

function lightSwitch(){
	if(isLightOn){
		document.getElementById("body").style.backgroundColor ="black";
		isLightOn = false;

	}else{
		document.getElementById("body").style.backgroundColor ="yellow";
		isLightOn = true;
	}
}

function calculator( x, y, operation){

	var result= 0;

	if(operation == "sum"){
		result = x + y;
	}

	if( operation == "multipcation"){
		result = x * y; 
	}
	alert(result);
}
function calculate(){
	 var x = document.getElementById("num1").value;
	var y = document.getElementById("num2").value;
    var operation = document.getElementById("operationType").value;

    calculator( parseInt(x), parseInt(y), operation);
}





