import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/home";
import ResultPage from "../pages/result";

function EntryRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EntryRoute;
