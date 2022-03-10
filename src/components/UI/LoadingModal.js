import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Backdrop from './Backdrop';
import LoadingSpinner from './LoadingSpinner';

const StyledSpinnerOverlay = styled.div`
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
`;

const SpinnerOverlay = () => {
  return (
    <StyledSpinnerOverlay>
      <LoadingSpinner />
    </StyledSpinnerOverlay>
  );
};

const LoadingModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <SpinnerOverlay />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default LoadingModal;
