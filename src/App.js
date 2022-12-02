import { BrowserRouter, Routes, Route } from "react-router-dom";
import StyleProvider from "./styles";
import Main from "./components/main";
import WorkPage from "./components/works";
import Posts from "./components/common/pagination/Posts";
import MakeNovel from "./components/makeNovel";
import SeeNovel from "./components/seeNovel";
import Comment from "./components/comment";
import MyWork from "./components/mypage/mywork";
import MyPage from "./components/mypage/myImformation";
import Paymentpage from "./components/paymentPage";

const App = () => {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work/:id" element={<WorkPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/seeNovel" element={<SeeNovel />} />
          <Route path="/makeNovel" element={<MakeNovel />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/paymentpage" element={<Paymentpage />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
};

export default App;
