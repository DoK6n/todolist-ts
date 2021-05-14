import React from 'react';
import styled from 'styled-components';
import { IItem, useItemDispatch } from '../hooks/itemsContext';

interface IItemBlockProps {
  done: boolean;
  onClick: () => void;
}

interface IItemProps {
  key: number;
  todo: IItem;
}

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 15px;
  cursor: pointer;
  text-decoration: line-through;
  text-decoration: ${(props: IItemBlockProps) => (props.done ? 'line-through' : 'none')};
  color: ${(props: IItemBlockProps) => (props.done ? '#999999' : 'black')};
  &:hover {
    font-weight: bold;
  }
`;

const Delete = styled.div`
  width: 10px;
  font-weight: bold;
  color: #83e7bc;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: tomato;
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Item({ todo }: IItemProps) {
  const dispatch = useItemDispatch();

  const onClickTodoDone = () => {
    dispatch({ type: 'TOGGLE', key: todo.key });
  };

  const onClickTodoDelete = () => {
    dispatch({ type: 'DELETE', key: todo.key });
  };

  return (
    <Line>
      <ItemBlock done={todo.done} onClick={onClickTodoDone}>
        {todo.text}
      </ItemBlock>
      <Delete onClick={onClickTodoDelete}>X</Delete>
    </Line>
  );
}

export default React.memo(Item);
