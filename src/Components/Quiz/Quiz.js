import React from "react";
import img from "../../assets/icons/arrow_back_black_24dp.svg";
import quizPic from "../../assets/images/quiz-image.png";
import "./Quiz.scss";

function Quiz({ question, answerOne, answerTwo, answerThree }) {
  return (
    <>
      <div>
        <h2 className="quiz">
          <img src={img} alt="Arrow Icon" /> Profile
        </h2>
      </div>
      <div className="quiz__container">
        <form>
          <img src={quizPic} alt="Quiz" />
          <h3>Preference Quiz</h3>
          <p>{question}</p>
          <div className="quiz__answers">
            <div className="quiz__answer">
              <label htmlFor="answerOne" className="quiz__answer-inner" >
                <input type="radio" id="answerOne" />
                {answerOne}
              </label>
            </div>
            <div className="quiz__answer">
              <label htmlFor="answerTwo" className="quiz__answer-inner">
                <input type="radio" id="answerTwo" />
                {answerTwo}
              </label>
            </div>
            <div className="quiz__answer">
              <label htmlFor="answerThree" className="quiz__answer-inner">
                <input type="radio" id="answerThree" />
                {answerThree}
              </label>
            </div>
          </div>
          <button className="quiz__button">Next</button>
          <button className="quiz__button-back">Back</button>
        </form>
      </div>
    </>
  );
}

export default Quiz;
