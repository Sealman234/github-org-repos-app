import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #e1e1e1;
  border: none;
  border-radius: 15px;
  padding: 5px 10px;
  white-space: nowrap;
  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

const ToggleMode = ({ onToggleDarkMode }) => {
  return <Button onClick={onToggleDarkMode}>Toggle Mode</Button>;
};

export default ToggleMode;
