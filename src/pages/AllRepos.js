import React, { Fragment } from 'react';
import RepoFilters from '../components/repos/RepoFilters';
import RepoList from '../components/repos/RepoList';

const AllRepos = () => {
  return (
    <Fragment>
      <RepoFilters />
      <RepoList />
    </Fragment>
  );
};

export default AllRepos;
