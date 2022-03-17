import React from 'react';
import styled from 'styled-components';
import Filter from '../UI/Filter';

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

const RepoFilters = () => {
  return (
    <SelectWrapper>
      <Filter name={'type'} label={'filterType'} options={OPTIONS_TYPE} />
      <Filter name={'sort'} label={'filterSort'} options={OPTIONS_SORT} />
      <Filter
        name={'direction'}
        label={'filterDirection'}
        options={OPTIONS_DIRECTION}
      />
    </SelectWrapper>
  );
};

export default RepoFilters;
