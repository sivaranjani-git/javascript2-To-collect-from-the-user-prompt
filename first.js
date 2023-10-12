// // user input
// let name= prompt("Whats your name?");
// console.log('hi',name);

//Easy way using alerts and prompts.
// let tickets = prompt('how many tickets do you  want?');
// console.log("you should pay",Number(tickets)*20);

// let  a = prompt("Enter a number");
// console.log((a)+10);

//Getting user input in JS

// var myName=window.prompt("What is your name?");
// console.log("Hello", MyName);

//HARD and practical way of getting user input
//need to put text box in the web page
//button to submit


//document - DOM -Document Object Model

document.getElementById("myButton").onclick= function(){
    var myName= document.getElementById("myText").value;
    console.log("Hello",myName);
}

//HTML form design
// 10 input fields
