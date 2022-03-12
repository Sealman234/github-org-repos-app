import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import LoadingModal from '../UI/LoadingModal';
import NavigationBar from './NavigationBar';

const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
`;

const Layout = (props) => {
  const selectLoading = useSelector((state) => state.ui.isLoading);

  return (
    <Fragment>
      {selectLoading && <LoadingModal />}
      <NavigationBar />
      <Container>{props.children}</Container>
    </Fragment>
  );
};

export default Layout;
