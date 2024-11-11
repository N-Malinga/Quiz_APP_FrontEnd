import "./App.css";
import Login from "./components/Login.js";
import Quiz from "./components/Quiz.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./components/Result.js";
import Layout from "./components/Layout.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
