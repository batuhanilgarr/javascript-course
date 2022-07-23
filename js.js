// ismi ekrana yazdırma
var myName = "Batuhan";

var yourName = prompt("What is your name?");

alert("My Name is " + myName + ", welcome to my course " + yourName + "!")




var gameLevel = 1
gameLevel = 2
gameLevel = 3

alert('your level is currently : ' + gameLevel)



// -------------------------------------------------------------------------------------------


// Javascript Variables Exercise
// Given the existing code below, can you write some code so that their values are switched around?

// var a = "3";
// var b = "8";
// So that the variable a holds the value "8".

// And the variable b holds the value "3".

// When the code is run, it should output:

// a is 8

// b is 3

// Do NOT change any of the existing code.

// You are NOT allowed to type any numbers.

// You should NOT redeclare the variables a and b.

// Hint: Use this code playground to run your code and see if it matches your expectations.

// Hint: The solution is just 3 lines of code.


// ANSWER

function test() {
  var a = '3'
  var b = '8'

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:

  var c = a
  a = b
  b = c

  /***********Do not change the code below 👇*******/

  console.log('a is ' + a)
  console.log('b is ' + b)
}




// -------------------------------------------------------------------------------------------



// Son veriyi yazdırır

var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;

alert("Your level is currently : " + gameLevel);








// Ekrana yazdırma


var message = 'Hello'
var name = 'Batuhan'

//write your code below this line:

alert(message + ' there,' + ' ' + name)






/*You have written 182 characters, you have -42 characters left.*/

var tweet = prompt("Compose your tweet: ");

var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");

/*You have written 182 characters, you have -42 characters left.*/

// length

var tweet = prompt("Compose your tweet: ");

alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");




// slice

var tweet = prompt('Compose your tweet: ')
var tweetUnder140 = tweet.slice(0, 140)
alert(tweetUnder140)

// Kısa hali

alert(prompt('Compose your tweet:').slice(0, 140))




// toUpperCase()

var name = 'Batuhan'
name.toUpperCase()

// toLowerCase()
var name = 'Batuhan'
name.toLowerCase()





// Sadece baş harfi büyük yapma

// 1 create a that stores the name that user enters via prompt
var name = prompt("What is your name?");

// 2 Capitalise the first letter of their name
    //a isolate the first char
    var firstChar = name.slice(0,1);
    
    //b Turn the first char to upper Case
    var upperCaseFirstChar = firstChar.toUpperCase();
    
    //c Isolate the rest of the name
    var restOfName = name.slice(1,name.length)

    //d Change the rest of the name lower case
    restOfName = restOfName.toLowerCase();
    
    //e contactenate the first char with the rest of the char
    var capitalisedName = upperCaseFirstChar + restOfName;

// 3 We use the capitalised version of their name to greet them using an alert.
alert("Hello, " + capitalisedName)




// Numbers

// humanAge = (dogAge -2 ) x 4 + 21

var dogAge = prompt('What is your dog age :')

humanAge = (dogAge - 2) * 4 + 21

alert('Your dog is ' + humanAge + ' years old in human years.')







