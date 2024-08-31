import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import data from "../data/data.json";
const fonturl =
  "https://fastly.jsdelivr.net/gh/projectnoonnu/2408-1@1.0/JNE-Bareun-TTF-Bold.woff2";
const Card = () => {
  const words = data.map((item) => item.word);
  const wheres = data.map((item) => item.where);

  const [currentIdx, setCurrentIdx] = useState(0);

  const handleCardClick = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % words.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIndex) => (prevIndex + 1) % words.length);
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [Word.length]);
  return (
    <Container onClick={handleCardClick}>
      <Title>
        내게주신 <span>하나님의 말씀</span>
      </Title>
      <WordWrap>
        <Word>{words[currentIdx]}</Word>
        <span>{wheres[currentIdx]}</span>
      </WordWrap>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  @font-face {
    font-family: "JNE-Bareun-TTF-Bold";
    src: url(${fonturl}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  width: 436px;
  height: 710px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(168, 195, 34, 1) 0%,
    rgba(253, 187, 45, 1) 45%
  );
  border-radius: 15px;
  box-shadow: 0px 0px 10px #666;
`;
const Title = styled.p`
  position: absolute;
  top: 30px;
  left: 30px;
  span {
    color: red;
    font-weight: bold;
  }
`;
const WordWrap = styled.div`
  width: 294px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const Word = styled.p`
  font-family: "JNE-Bareun-TTF-Bold";
  display: flex;
  width: 190px;
  height: 100%;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
