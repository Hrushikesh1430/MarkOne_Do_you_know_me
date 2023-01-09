var readlineSync = require('readline-sync');
var score = 0

var user_name = readlineSync.question("Please enter your name? \n")

data = [
  {
    question: "Where do I live? \n1.Bangalore \n2.Pune \n3.Mumbai\n4.Chennai \nYour Answer: ",
    answer: "mumbai"
  },
  {
    question: "What is my favourite color? \n1.orange \n2.green \n3.yellow \n4.blue  \nYour Answer:",
    answer: "orange"
  },
  {
    question: "What is my favourite sport?  \n1.chess \n2.cricket \n3.football \n4.kabaddi  \nYour Answer:",
    answer: "cricket"
  },
  {
    question: "Which show do I love the most? \n1.Friends \n2.Tarak Mehta \n3.The Big Bang Theory \n4.Khichdi  \nYour Answer:",
    answer: "Tarak Mehta"
  },
  {
    question: "Which is my favourite genre in Music? \n1.Classical \n2.Rock \n3.Pop \n4.Bollywood  \nYour Answer:",
    answer: "Classical"
  }

]
function check(question, answer) {
  var user_answer = readlineSync.question(question)
  if (user_answer.toLowerCase() === answer.toLowerCase()) {
    console.log("Right Answer")
    score++;
    console.log("Your score is :" + score + "\n*************************** \n")
  }
  else {
    console.log("Wrong answer")
    console.log("Your score is :" + score + "\n*************************** \n")
  }
}
data.map((item) => (
  check(item.question, item.answer)
))
console.log(user_name + " your score is " + score)


// var superman = {
//   strength: 80,
//   costume_color: "Red"
// }
// var batman = {
//   strength: 100,
//   costume_color: "Black"
// }

// var superheros = [superman, batman]

// for (var i = 0; i < superheros.length; i++) {
//   console.log(superheros[i].strength)
// }