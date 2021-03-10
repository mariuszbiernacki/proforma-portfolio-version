import React from "react";
import bgPhoto from "../assets/images/gasket-home-photo.jpg";
import styled from "styled-components";

const HomeWrapper = styled.div`
  background-image: ${({ photo }) => `url(${photo})`};
  height: 100vh;
  width: 100%;
  background-size: cover;
`;

const HomePage = () => {
  return <HomeWrapper photo={bgPhoto} />;
};

export default HomePage;
