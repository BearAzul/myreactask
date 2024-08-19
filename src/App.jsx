import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/TugasPraktik/HomePage.jsx";
import TaskTwo from "./pages/TugasPraktik2/tugaspraktik2.jsx";
import TaskThree from "./pages/TugasPraktik3/tugaspraktik3.jsx";
import TaskFour from "./pages/TugasPraktik4/tugaspraktik4.jsx";
import TaskFive from "./pages/TugasPraktik5/tugaspraktik5.jsx";
import TaskSix from "./pages/TugasPraktik6/tugaspraktik6.jsx";
import TaskSeven from "./pages/TugasPraktik7/tugaspraktik7.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tugaspraktik2" element={<TaskTwo />} />
        <Route path="/tugaspraktik3" element={<TaskThree />} />
        <Route path="/tugaspraktik4" element={<TaskFour />} />
        <Route path="/tugaspraktik5" element={<TaskFive />} />
        <Route path="/tugaspraktik6" element={<TaskSix />} />
        <Route path="/tugaspraktik7" element={<TaskSeven />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
