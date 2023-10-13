import './style.css';
import {Questions} from './question';

console.log(Questions);
const app=document.querySelector("#app");//querySelector prend en paramètre les selecteur css
const StartButton=document.querySelector("#start");//querySelector prend en paramètre les selecteur css

StartButton.addEventListener("click",startQuiz);

function startQuiz(event){
    console.log(event);
    let currentQuestion=0;//correspond au i
    let score=0;

clean() //effacer le app quand le click est ok

     displayQuestion(currentQuestion)
  

}
function createAnswer(Answers){
const AnswerDiv=document.createElement("div");

AnswerDiv.classList.add("Answers");


for(const Answer of Answers){
    const label=getElementAnswer(Answer);
    AnswerDiv.appendChild(label);
}
return AnswerDiv;
}

///
function clean(){
    while(app.firstElementChild){
        app.firstElementChild.remove();
    }
}

///
function getElementAnswer(text){
    const label=document.createElement("label");
    label.innerText=answer;
    const input= document.createElement("input");
    const id=answer.replaceAll("","").toLowerCase();
    input=id;
    label.htmlFor=id;
    input.setAttribute("type","radio");
    input.setAttribute("name","answer");
    input.setAttribute("value","text");

    label.appendChild(input);
    return label;
}

    function getTitleElement(text){
const title=document.createElement("h3");
title.innerText=text;
return title;

        }

        function displayQuestion(index){//on affiche la question courrante
        const question=Questions[index];

        if(!question){//sil nya pas de question
            //finish le quiz
        }

        const title= getTitleElement(question.question);
        app.appendChild(title);
        const AnswerDiv= createAnswer(question.answers);
        app.appendChild(AnswerDiv);
    }