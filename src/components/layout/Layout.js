import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import LoadingModal from '../UI/LoadingModal';
import NavigationBar from './NavigationBar';

const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
`;

const DarkMode = styled.div`
  min-height: 100vh;
  transition: background-color 0.3s;
  &.dark-mode {
    background-color: #15202b;
    h1 {
      color: #fff;
    }
  }
`;

const Layout = (props) => {
  const selectLoading = useSelector((state) => state.ui.isLoading);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('react-notes-app-dark-mode');
    setDarkMode(savedMode === 'dim' ? true : false);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-dark-mode',
      darkMode ? 'dim' : 'light'
    );
  }, [darkMode]);

  return (
    <Fragment>
      <DarkMode className={darkMode && 'dark-mode'}>
        {selectLoading && <LoadingModal />}
        <NavigationBar onToggleDarkMode={toggleDarkModeHandler} />
        <Container>{props.children}</Container>
      </DarkMode>
    </Fragment>
  );
};

export default Layout;
