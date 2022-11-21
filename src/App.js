import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyleProvider from "./styles";
import Main from "./components/main";
import WorkPage from "./components/works";
// import MyPage from "./components/mypage/myImformation";
// import MyWork from "./components/mypage/mywork";
import Comment from "./components/comment";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/comment" element={<Comment />} />
          {/* <Route path="/mypage" element={<MyPage />} />
          <Route path="/mywork" element={<MyWork />} /> */}
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
