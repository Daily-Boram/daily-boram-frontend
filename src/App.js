import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyleProvider from "./styles";
import Main from "./components/main";
import WorkPage from "./components/works";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
