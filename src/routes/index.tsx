import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/home";
import ResultPage from "../pages/result";

import SignUpPage from "../pages/signup";
import LoginPage from "../pages/login";
import ImageInputPage from "../pages/image-input";
import InfoInputPage from "../pages/info-input";

function EntryRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/imageinput" element={<ImageInputPage />} />
        <Route path="/infoinput" element={<InfoInputPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EntryRoute;
