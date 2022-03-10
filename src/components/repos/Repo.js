import React from 'react';
import styled from 'styled-components';

const StyledRepo = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #d8dee4;
`;

const RepoTitle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  > h3 {
    margin: 0;
    > a {
      text-decoration: none;
    }
  }
`;

const RepoDescription = styled.p`
  margin: 0;
`;

const Label = styled.span`
  display: inline-block;
  padding: 0 7px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  white-space: nowrap;
  border: 1px solid #d0d7de;
  border-radius: 2rem;
  color: #57606a;
`;

const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  > span {
    display: inline-block;
    padding: 0 7px;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.125rem;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 2rem;
    color: #0969da;
    background-color: #def;
  }
`;

const Repo = (props) => {
  return (
    <StyledRepo key={props.id}>
      <RepoTitle>
        <h3>
          <a href={props.svnUrl} target="_blank" rel="noreferrer">
            {props.name}
          </a>
        </h3>
        <Label>{props.private ? 'Private' : 'Public'}</Label>
      </RepoTitle>
      {props.description && (
        <RepoDescription>{props.description}</RepoDescription>
      )}
      {props.topics.length > 0 && (
        <Topics>
          {props.topics.map((topic) => (
            <span>{topic}</span>
          ))}
        </Topics>
      )}
    </StyledRepo>
  );
};

export default Repo;
