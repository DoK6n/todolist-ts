import React from 'react';
import styled from 'styled-components';
import { useItemDispatch } from '../hooks/itemsContext';

const Input = styled.input`
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: #22ca80c9;
  outline: none;
  background-color: transparent;
  font-size: 1.5em;
  padding: 0 0 5px 20px;
  margin: 0 40px 0 40px;
  @media (max-width: 480px) {
    font-size: 0.8em;
    margin: 0 20px 0 20px;
    padding: 0 0 5px 10px;
  }
`;

function Footer() {
  const dispatch = useItemDispatch();

  const onCreateItem = (e: any) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      dispatch({ type: 'CREATE', text: e.target.value });
      e.target.value = '';
    }
  };

  return (
    <>
      <Input type='text' placeholder='오늘은...' onKeyPress={onCreateItem} />
    </>
  );
}

export default Footer;
