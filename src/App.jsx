import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Answers from "./components/Answers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
