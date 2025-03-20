import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesDisplay from "./Pages/MoviesDisplay";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesDisplay />} />
      </Routes>
    </Router>
  )
};

export default App;