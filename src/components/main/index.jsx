import styled from "styled-components";
import Header from "../common/header";
import { Search } from "../../assets/Img";

const Main = () => {
    return (
        <>
            <Header />
            <Background>
                <SearchBar>
                    <Input placeholder="제목/졲까" />
                    <Glass src={Search} />
                </SearchBar>
            </Background>
        </>
    );
};

const SearchBar = styled.div`
    width: 1050px;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.color.main};
    border-radius: 100px;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 900px;
    margin-left: 30px;
`;

const Background = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 100px;
`;

const Glass = styled.img`
    margin-left: 40px;
`;

export default Main;
