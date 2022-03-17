import React, { useRef } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const FormWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.25rem;
  width: 200px;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 0.25rem 0 0 0.25rem;
`;

const Button = styled.button`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 0 0.25rem 0.25rem 0;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

const Search = ({ onSubmit }) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(inputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormWrapper>
        <Input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Searching for an organization..."
        />
        <Button type="submit">
          <MdSearch size="1rem" title="Search" />
        </Button>
      </FormWrapper>
    </form>
  );
};

export default Search;
