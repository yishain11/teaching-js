import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import DataPage from "./pages/Data";
import TestPage from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
