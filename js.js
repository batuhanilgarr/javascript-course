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







// Soru 1:
// What does num  equal?

// var num = 12;
// num /= 3;

// 4



// Soru 2:
// What does a  equal?

// var a = 16 % 4; 


// 0



// Soru 3:
// What does y  equal?

// var x = 3;
// var y = x++;
// y += 1;

// 4









// --------------------------------------------------------------------------------------









// Function ()

function getMilk() {
  console.log('LeaveHouse')
  console.log('moveRight')
  console.log('LeaveHouse')
  console.log('moveRight')
  console.log('LeaveHouse')
  console.log('moveRight')
  console.log('LeaveHouse')
  console.log('moveRight')
  console.log('LeaveHouse')
  console.log('moveRight')
  console.log('LeaveHouse')
  console.log('moveRight')
  console.log('LeaveHouse')
  console.log('moveRight')
}

getMilk()






function getMilk(money) {
  console.log('leaveHouse')
  console.log('moveRight')
  console.log('moveRight')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveUp')
  console.log('moveRight')
  console.log('moveRight')

  var numberOfBottles = Math.floor(money / 1.5)

  console.log('buy ' + numberOfBottles + ' bootles of Milk')
  console.log('moveLeft')
  console.log('moveLeft')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveDown')
  console.log('moveLeft')
  console.log('moveLeft')
  console.log('enterHouse')
}

getMilk(5)












// VKİ Hesaplama

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height)

  return Math.round(bmi)
}

var bmi = bmiCalculator(65, 1.8)
console.log(bmi)




// İF / ELSE YAPISI İLE

var weight = prompt('Kilonuz : ')
var height = prompt('Boyunuz : ')

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2))
  var interpretation

  if (bmi < 18.5) {
    interpretation = 'Your BMI is ' + bmi + ', so you are underweight.'
  }

  if (bmi >= 18.5 && bmi < 24.9) {
    interpretation = 'Your BMI is ' + bmi + ', so you have a normal weight.'
  }

  if (bmi >= 25) {
    interpretation = 'Your BMI is ' + bmi + ', so you are overweight.'
  }

  return interpretation
}







// Love Score Game

prompt('What is your name?');
prompt('What is their name?');

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
  alert('Your love score is ' + loveScore + '%' + ' You love each other like Kanye loves Kanye.');
} else {
  alert('Your love score is ' + loveScore + '%');
}




// DİĞER ŞEKLİ

prompt('What is your name?')
prompt('What is their name?')

var loveScore = Math.random() * 100
loveScore = Math.floor(loveScore) + 1 //1-100

if (loveScore > 70) {
  alert(
    'Your love score is ' +
      loveScore +
      '%' +
      ' You love each other like Kanye loves Kanye.'
  )
}

if (loveScore > 30 && loveScore <= 70) {
  alert('Your love score is ' + loveScore + '%')
}

if (loveScore <= 30) {
  alert(
    'Your love score is ' +
      loveScore +
      '%' +
      ' You go together like oil and water.'
  )
}





var a = 1
var b = 1

if (a === b) {
  console.log('yes')
} else {
  console.log('no')
}







// ARRAY
// Giriş Bilgisi Kontrol ettirme

var guestList = ['angela', 'jack', 'pam', 'james', 'lara', 'jason']

var guestName = prompt('What is your name?')

if (guestList.includes(guestName)) {
  alert('Welcome')
} else {
  alert('Sorry, maybe next time')
}



//Bölünebilme olayına göre diziye istedilen şeyi ekleme
var output = []
var count = 1

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push('FizzBuzz')
  }

  if (count % 3 === 0) {
    output.push('fizz')
  } else if (count % 5 === 0) {
    output.push('Buzz')
  } else {
    output.push(count)
  }

  count++

  console.log(output)
}


// DİĞER YÖNTEM

var output = []
var count = 1

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz')
    } else if (count % 3 === 0) {
      output.push('fizz')
    } else if (count % 5 === 0) {
      output.push('Buzz')
    } else {
      output.push(count)
    }

    count++
  }
  console.log(output)
}




// Bugün yemeği kim ısmarlıyor
function whosPaying(names) {
  var numberOfPeople = names.length
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople)
  var randomPerson = names[randomPersonPosition]

  console.log(randomPerson + ' is going to buy launch today!')
}







var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}









