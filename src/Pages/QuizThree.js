import React from 'react'
import Quiz from '../Components/Quiz/Quiz'
const question = `3.Which environment do you plan to place your plants in?`
const answerOne = 'Sunny and bright'
const answerTwo = 'Low light or indirect sunlight'
const answerThree = 'Humid environment'
function QuizThree() {
  return (
    <div>
      <Quiz question={question} answerOne={answerOne} answerTwo={answerTwo} answerThree={answerThree}/>
    </div>
  )
}

export default QuizThree