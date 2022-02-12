import React from 'react';
import Logo from 'assets/logo.svg'

export interface ITestImageProps {
}

const TestImage = (props: ITestImageProps) => {
  return (
    <>
        <img src={Logo} alt="TestImage" />
    </>
  );
}

export default TestImage