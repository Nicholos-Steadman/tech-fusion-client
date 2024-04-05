import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QuizOne from "./Pages/QuizOne";
import QuizTwo from "./Pages/QuizTwo";
import Profile from "./Pages/Profile";
import QuizThree from "./Pages/QuizThree";
import { useEffect, useState } from "react";
// const url = "http://localhost:8080/";

function App() {
  const [quizPage, setQuizPage] = useState("");
  const [selectedTags, setSelectedTags] = useState("");

  useEffect(() => {
    console.log(`hello${selectedTags}`);
  }, [setSelectedTags]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/quiz/one"
            element={
              <QuizOne
                setSelectedTags={setSelectedTags}
                quizPage={quizPage}
                setQuizPage={setQuizPage}
              />
            }
          />
          <Route
            path="/quiz/two"
            element={<QuizTwo quizPage={quizPage} setQuizPage={setQuizPage} />}
          />
          <Route
            path="/quiz/three"
            element={
              <QuizThree quizPage={quizPage} setQuizPage={setQuizPage} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
