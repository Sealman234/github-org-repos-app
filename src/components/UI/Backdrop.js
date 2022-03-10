import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #202124;
  opacity: 0.6;
`;

const Backdrop = () => {
  return <StyledBackdrop />;
};

export default Backdrop;
