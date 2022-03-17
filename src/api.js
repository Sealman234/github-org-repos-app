import axios from 'axios';

const githubInstance = axios.create({
  baseURL: 'https://api.github.com',
});

export const apiGetRepos = ({ org, page, type, sort, direction }) => {
  let url = `/orgs/${org}/repos?per_page=10`;
  if (page) url += `&page=${page}`;
  if (type) url += `&type=${type}`;
  if (sort) url += `&sort=${sort}`;
  if (direction) url += `&direction=${direction}`;
  return githubInstance.get(url);
};
