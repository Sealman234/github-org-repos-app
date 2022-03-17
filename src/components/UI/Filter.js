import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchRepos } from '../../store/repo-actions';
import { repoActions } from '../../store/repo-slice';

const StyledSelect = styled.select`
  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  background-color: #f6f8fa;
`;

const Filter = ({ name, label, options }) => {
  const dispatch = useDispatch();
  const selectValue = useSelector((state) => state.repo[label]);

  const changeHandler = (label) => {
    return (event) => {
      dispatch(repoActions.SET_FILTER({ label, value: event.target.value }));
      dispatch(repoActions.RESET_REPOS());
      dispatch(fetchRepos());
    };
  };

  return (
    <StyledSelect
      name={name}
      value={selectValue}
      onChange={changeHandler(label)}
    >
      <option value="" disabled>
        Select {name}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Filter;
