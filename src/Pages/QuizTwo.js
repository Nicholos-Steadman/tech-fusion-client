import React from "react";
import Quiz from "../Components/Quiz/Quiz";
import axios from "axios"
const question = `2. What size of plant are you most interested in purchasing?`;
const answerOne = "Small succulents or cacti";
const answerTwo = "Medium-sized potted plants";
const answerThree = "Large floor plants or trees";
const tagOne = "low";
const tagTwo = "medium";
const tagThree = "high";
const url = "http://localhost:8080/answers";
function QuizTwo({ setSelectedTags }) {
  return (
    <div>
      <Quiz
        nextQ={"/quiz/three"}
        setSelectedTags={setSelectedTags}
        question={question}
        answerOne={answerOne}
        answerTwo={answerTwo}
        answerThree={answerThree}
        tagOne={tagOne}
        tagTwo={tagTwo}
        tagThree={tagThree}
      />
    </div>
  );
}

export default QuizTwo;
