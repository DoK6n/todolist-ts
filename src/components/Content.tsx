import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useItemState } from '../hooks/itemsContext';

const ItemList = styled.div`
  height: 80%;
  margin: 30px 0 20px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #e9ecef;
  }
  &::-webkit-scrollbar-thumb:vertical {
    background: linear-gradient(0deg, #e9ecef, #22ca80c9, #e9ecef);
    border-radius: 8px;
  }
`;

function Content() {
  const todos = useItemState();

  return (
    <ItemList>
      {todos.map(todo => (
        <Item key={todo.key} todo={todo} />
      ))}
    </ItemList>
  );
}

export default React.memo(Content);
