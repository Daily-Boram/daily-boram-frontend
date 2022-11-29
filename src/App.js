import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyleProvider from "./styles";
import Main from "./components/main";
import WorkPage from "./components/works";
import Posts from "./components/common/pagination/Posts";
import MakeNovel from "./components/makeNovel";
import SeeNovel from "./components/seeNovel";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/seeNovel" element={<SeeNovel />} />
          <Route path="/makeNovel" element={<MakeNovel />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
