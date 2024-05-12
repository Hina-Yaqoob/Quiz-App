const Questions = [{
    'que': 'Which of the following is a markup language?',

    'a':  'HTML',
    'b':  'CSS',
    'c':  'JavaScript',
    'd':  'php',
    'correct': 'a'

},
{
'que': 'What Year was JavaScript launched?',

'a': "1996",
'b': "1995",
'c': "1994",
'd': "none of the above",
'correct': "b"

},

{
    'que': 'What does css stands for?',

    'a': "HyperText Markup Language",
    'b': 'Casecading Style Sheet',
    'c': 'Jason Object Notation',
    'd': 'Helicopters Terminals Motorboats Lamborginis' ,
    'correct': 'b'
    
}
]
let index = 0;
let total = Questions.length;
let right= 0;
wrong = 0; 
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () => {
if(index==total){
     return endQuiz();
}
    reset();

    const data = Questions[index]
    console.log(data)
    quesBox.innerText = `${index}} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = Questions[index];
    const ans = getAnswer()
    if(ans==data.correct){
    right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return ;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach (
        (input) => {
            if(input.checked){
              answer= input.value;
              
             }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach (
        (input) => {
            input.checked = false;
    
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3>Thanks for playing the Quiz </h3>
    <h2> ${right}/ ${total} are correct </h2>
    `
}

//initial call
loadQuestion();
  
