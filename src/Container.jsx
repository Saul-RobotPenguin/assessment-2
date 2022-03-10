import { Route, Routes } from "react-router-dom";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import ErrorPage from "./components/ErrorPage";
const Container = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Container;
