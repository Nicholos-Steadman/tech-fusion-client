import React from 'react'
import Quiz from '../Components/Quiz/Quiz'
const question = `2. What size of plant are you most interested in purchasing?`
const answerOne = 'Small succulents or cacti'
const answerTwo = 'Medium-sized potted plants'
const answerThree = 'Large floor plants or trees'
function QuizTwo() {
  return (
    <div>
      <Quiz question={question} answerOne={answerOne} answerTwo={answerTwo} answerThree={answerThree}/>
    </div>
  )
}

export default QuizTwo