import React, { useCallback, useEffect, useState } from 'react';
import { apiGetRepos } from '../../api';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchRepos = useCallback(async () => {
    try {
      const data = {
        page,
      };
      const response = await apiGetRepos(data);
      console.log(response);
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <ul>
      {repos.map((repo) => {
        return (
          <li key={repo.id}>
            <a href={repo.url}>{repo.name}</a>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
            <p>{repo.private ? 'Private' : 'Public'}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default RepoList;
