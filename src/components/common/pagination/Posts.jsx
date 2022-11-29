import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "../header";
import ContentDummy from "../../../constance/content";
import ContentsList from "../contents";
import Pagination from ".";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <WorkRoundPageContainer>
        {ContentDummy.map((e) => (
          <ContentsList
            number={e.id}
            title={e.title}
            date={e.date}
            likenumber={e.likenumber}
            price={e.price}
          />
        ))}
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </WorkRoundPageContainer>
    </>
  );
};

export default Posts;

const WorkRoundPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-of-type {
    margin-top: 180px;
  }
`;
