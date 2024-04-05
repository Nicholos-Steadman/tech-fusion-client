import React from 'react'
import Quiz from '../Components/Quiz/Quiz'
const question = `1. Which of the following plant characteristics do you prioritize most 
in your purchase decision?`
const answerOne = 'Flowering period'
const answerTwo = 'Low maintenance'
const answerThree = 'Air-purifying properties'
function QuizOne() {
  return (
    <div>
      <Quiz question={question} answerOne={answerOne} answerTwo={answerTwo} answerThree={answerThree}/>
    </div>
  )
}

export default QuizOne
