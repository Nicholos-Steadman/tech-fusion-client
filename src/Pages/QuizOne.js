import React from 'react'
import Quiz from '../Components/Quiz/Quiz'
const question = `1. Which of the following plant characteristics do you prioritize most 
in your purchase decision?`
const answerOne = 'Flowering period'
const answerTwo = 'Low maintenance'
const answerThree = 'Air-purifying properties'
const tagOne = "indoor"
const tagTwo = "hybrid"
const tagThree = "outdoor"
function QuizOne({setSelectedTags, quizPage, setQuizPage}) {
  return (
    <div>
      <Quiz nextQ={"/quiz/two"} setSelectedTags={setSelectedTags}  quizPage={quizPage} setQuizPage={setQuizPage} question={question} answerOne={answerOne} answerTwo={answerTwo} answerThree={answerThree} tagOne={tagOne} tagTwo={tagTwo} tagThree={tagThree}/>
    </div>
  )
}

export default QuizOne
