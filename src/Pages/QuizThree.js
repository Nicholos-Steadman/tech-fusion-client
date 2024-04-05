import React from 'react'
import Quiz from '../Components/Quiz/Quiz'
const question = `3.Which environment do you plan to place your plants in?`
const answerOne = 'Sunny and bright'
const answerTwo = 'Low light or indirect sunlight'
const answerThree = 'Humid environment'
const tagOne = "green"
const tagTwo = "red"
const tagThree = "yellow"

function QuizThree({setSelectedTags}) {
  return (
    <div>
      <Quiz nextQ={"/"} setSelectedTags={setSelectedTags} question={question} answerOne={answerOne} answerTwo={answerTwo} answerThree={answerThree} tageOne={tagOne} tageTwo={tagTwo} tageThree={tagThree}/>
    </div>
  )
}

export default QuizThree