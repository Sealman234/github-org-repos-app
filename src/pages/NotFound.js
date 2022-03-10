import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <p>Page not found!</p>
    </StyledNotFound>
  );
};

export default NotFound;
