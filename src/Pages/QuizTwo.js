import React from 'react'
import Quiz from '../Components/Quiz/Quiz'
const question = `2. What size of plant are you most interested in purchasing?`
const answerOne = 'Small succulents or cacti'
const answerTwo = 'Medium-sized potted plants'
const answerThree = 'Large floor plants or trees'
const tagOne = "snake"
const tagTwo = "low maintenence"
const tagThree = "air purifying"

function QuizTwo() {
  return (
    <div>
      <Quiz nextQ={"/quiz/three"} question={question} answerOne={answerOne} answerTwo={answerTwo} answerThree={answerThree} tageOne={tagOne} tageTwo={tagTwo} tageThree={tagThree}/>
    </div>
  )
}

export default QuizTwo