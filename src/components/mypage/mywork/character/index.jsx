import styled from "styled-components"
import { User } from "../../../../assets/Img";

const Character = ({ name }) => {
  return (
    <CharacterWrapper>
        <CharacterImage src={User}/>
        <CharacterName>{name}</CharacterName>
    </CharacterWrapper>
  )
}

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const CharacterImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
`;

const CharacterName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.color.gray02};
`;

export default Character;