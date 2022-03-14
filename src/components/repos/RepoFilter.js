import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchRepos } from '../../store/repo-actions';
import { repoActions } from '../../store/repo-slice';

const OPTIONS_TYPE = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Public',
    value: 'public',
  },
  {
    label: 'Private',
    value: 'private',
  },
  {
    label: 'Forks',
    value: 'forks',
  },
  {
    label: 'Archived',
    value: 'archived',
  },
  {
    label: 'Mirrors',
    value: 'mirrors',
  },
  {
    label: 'Templates',
    value: 'templates',
  },
];
const OPTIONS_SORT = [
  {
    label: 'Created',
    value: 'created',
  },
  {
    label: 'Updated',
    value: 'updated',
  },
  {
    label: 'Pushed',
    value: 'pushed',
  },
  {
    label: 'Full Name',
    value: 'full_name',
  },
];
const OPTIONS_DIRECTION = [
  {
    label: 'Asc',
    value: 'asc',
  },
  {
    label: 'Desc',
    value: 'desc',
  },
];

const SelectWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledSelect = styled.select`
  padding: 4px;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  background-color: #f6f8fa;
`;

const RepoFilter = () => {
  const dispatch = useDispatch();
  const selectType = useSelector((state) => state.repo.filterType);
  const selectSort = useSelector((state) => state.repo.filterSort);
  const selectDirection = useSelector((state) => state.repo.filterDirection);

  const changeHandler = (label) => {
    return (event) => {
      dispatch(repoActions.SET_FILTER({ label, value: event.target.value }));
      dispatch(repoActions.RESET_REPOS());
      dispatch(fetchRepos());
    };
  };

  return (
    <SelectWrapper>
      <StyledSelect
        name="type"
        value={selectType}
        onChange={changeHandler('filterType')}
      >
        <option value="" disabled>
          Select Type
        </option>
        {OPTIONS_TYPE.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect
        name="sort"
        value={selectSort}
        onChange={changeHandler('filterSort')}
      >
        <option value="" disabled>
          Select Sort
        </option>
        {OPTIONS_SORT.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect
        name="direction"
        value={selectDirection}
        onChange={changeHandler('filterDirection')}
      >
        <option value="" disabled>
          Select Direction
        </option>
        {OPTIONS_DIRECTION.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default RepoFilter;
