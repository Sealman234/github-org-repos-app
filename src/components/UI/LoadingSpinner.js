import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

const Spinner = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;

  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 4px;
    border-radius: 50%;
    border: 4px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: ${spinner} 1.2s linear infinite;
  }
`;

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;
