import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyleProvider from "./styles";
import Main from "./components/main";
import WorkPage from "./components/works";
// import MyPage from "./components/mypage/myImformation";
// import MyWork from "./components/mypage/mywork";
import Comment from "./components/comment";
import SeeNovel from "./components/seeNovel";
import MakeNovel from "./components/makeNovel";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<WorkPage />} />
          {/* <Route path="/mypage" element={<MyPage />} />
          <Route path="/mywork" element={<MyWork />} /> */}
          <Route path="/comment" element={<Comment />} />
          <Route path="/seeNovel" element={<SeeNovel />} />
          <Route path="/makeNovel" element={<MakeNovel />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
