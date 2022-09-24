import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import * as Car from '../assets/10702-car-animation.json';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #282c34;
  align-items: center;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 40px;
  color: #ffffff;
`;

export const SoundHome = () => {
  return (
    <Page>
      <PageHeader>Title is here</PageHeader>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Car,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        width={200}
        height={200}
      />
    </Page>
  );
};
