import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="img-container">
        {/* <img src="./images/img1.png" alt="" /> */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  .img-container {
    display: flex;
    flex-grow: 1;
    background: url("./images/img1.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  img {
    width: 100%;
    margin: auto 0;
  }
`;
export default Home;
