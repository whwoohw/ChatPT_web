import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/home";
import ResultPage from "../pages/result";
import TestPage from "../pages/test";

function EntryRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EntryRoute;
