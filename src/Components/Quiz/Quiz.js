import React, { useEffect, useState } from "react";
import img from "../../assets/icons/arrow_back_black_24dp.svg";
import quizPic from "../../assets/images/quiz-image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Quiz.scss";

function Quiz({
  setSelectedTags,
  quizPage,
  setQuizPage,
  question,
  answerOne,
  answerTwo,
  answerThree,
  tagOne,
  tagTwo,
  tagThree,
  nextQ,
}) {
  const url = "http://localhost:8080/answers";
  const [newAnswer, setNewAnswer] = useState("");
  useEffect(() => {
    const getAnswers = async () => {
      try {
        const response = await axios.get(`${url}`);
        const answers = response.data;
        setNewAnswer(answers);
        console.log(answers);
      } catch (error) {
        console.error(error);
      }
    };
    getAnswers();
  }, []);

  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState("hello");

  function handleRadioChange(event) {
    setSelectedAnswer(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selectedAnswer);
    axios
      .put(url, {
        answer: selectedAnswer,
      })
      .then((response) => {
        // Handle success
        console.log("PUT request successful:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error making PUT request:", error);
      });
    const pageOne = "/quiz/one";
    const pageTwo = "/quiz/two";
    const pageThree = "/quiz/three";

    setSelectedTags(selectedAnswer);

    console.log(selectedAnswer);
    // if (!quizPage) {
    //   setQuizPage(pageTwo);
    // } else if (quizPage === pageTwo) {
    //   setQuizPage(pageThree);
    // }
    navigate(nextQ);
  }

  return (
    <>
      <div>
        <h2 className="quiz">
          <Link className="quiz__back-link" to="/profile">
            <img src={img} alt="Arrow Icon" />
          </Link>
          Profile
        </h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="quiz__container">
          <img src={quizPic} alt="Quiz" />
          <h2>Preference Quiz</h2>
          <div className="quiz__question--container">
            <p className="quiz__question">{question}</p>
          </div>
          <div className="quiz__answers">
            <div className="quiz__answer quiz__answer--underline">
              <label htmlFor="answerOne" className="quiz__answer-inner">
                <input
                  name="question"
                  type="radio"
                  id="answerOne"
                  value={tagOne}
                  onChange={handleRadioChange}
                />
                {answerOne}
              </label>
            </div>
            <div className="quiz__answer quiz__answer--underline">
              <label htmlFor="answerTwo" className="quiz__answer-inner">
                <input
                  name="question"
                  type="radio"
                  id="answerTwo"
                  value={tagTwo}
                  onChange={handleRadioChange}
                />
                {answerTwo}
              </label>
            </div>
            <div className="quiz__answer">
              <label htmlFor="answerThree" className="quiz__answer-inner">
                <input
                  name="question"
                  type="radio"
                  id="answerThree"
                  value={tagThree}
                  onChange={handleRadioChange}
                />
                {answerThree}
              </label>
            </div>
          </div>
          <button type="submit" className="quiz__button">
            Next
          </button>
          <button className="quiz__button-back">Back</button>
        </form>
      </div>
    </>
  );
}

export default Quiz;
