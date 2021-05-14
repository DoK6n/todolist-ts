import React from 'react';
import styled from 'styled-components';
import { useItemState } from '../hooks/itemsContext';

const Title = styled.div`
  text-align: center;
  font-size: 2em;
  @media (max-width: 480px) {
    font-size: 1.3em;
  }
`;

const Increase = styled.span`
  display: inline-block;
  padding: 4px 10px;
  font-size: 75%;
  text-align: center;
  vertical-align: baseline;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 10rem;
  background-color: ${props => props.color || 'black'};
  color: #dee2e6;
  line-height: 1;
  font-weight: bold;
`;

function Header() {
  const todos = useItemState();

  const count = todos.filter(todo => !todo.done).length;

  return (
    <>
      <Title>
        오늘 뭐 하지? <Increase color='#22ca80c9'>{count}개</Increase>
      </Title>
    </>
  );
}

export default React.memo(Header);
