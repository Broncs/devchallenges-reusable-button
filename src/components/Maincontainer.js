import React from 'react';
import Buttons from './Buttons';
import SideBar from './SideBar';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 237px auto;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const Maincontainer = () => {
  return (
    <MainWrapper>
      <SideBar />
      <Buttons />
    </MainWrapper>
  );
};

export default Maincontainer;
