import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
// const url = "http://localhost:8080/";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
