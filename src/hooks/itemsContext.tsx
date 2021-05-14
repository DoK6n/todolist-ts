import React, { createContext, useContext, useReducer, Dispatch } from 'react';

const initialTodos: IItem[] = [
  {
    key: 1,
    text: ' 배민커넥트 하기',
    done: true
  },
  {
    key: 2,
    text: '리액트 + 타입스크립트 공부하기',
    done: true
  },
  {
    key: 3,
    text: '토이 프로젝트 하기',
    done: false
  },
  {
    key: 4,
    text: 'Git 공부하기',
    done: false
  },
  {
    key: 5,
    text: '코테 1일 1문제',
    done: false
  }
];

export interface IItem {
  key: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'TOGGLE'; key: number }
  | { type: 'DELETE'; key: number };

type ItemDispatch = Dispatch<Action>;

function reducer(state: IItem[], action: Action): IItem[] {
  switch (action.type) {
    case 'CREATE': {
      const nextId =
        Math.max(
          0,
          ...state.map(todo => {
            console.log(todo);
            return todo.key;
          })
        ) + 1;
      return state.concat({ key: nextId, text: action.text, done: false });
    }
    case 'TOGGLE':
      return state.map(todo => (todo.key === action.key ? { ...todo, done: !todo.done } : todo));
    case 'DELETE':
      return state.filter(todo => todo.key !== action.key);
    default:
      throw new Error('unahdled action type');
  }
}

const ItemsContext = createContext<IItem[] | null>(null);
const ItemsDispatchContext = createContext<ItemDispatch | null>(null);

export function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <ItemsDispatchContext.Provider value={dispatch}>
      <ItemsContext.Provider value={todos}>{children}</ItemsContext.Provider>
    </ItemsDispatchContext.Provider>
  );
}

export function useItemState(): IItem[] {
  const state = useContext(ItemsContext);
  if (!state) throw new Error('ItemsProvider not found');
  return state;
}

export function useItemDispatch() {
  const dispatch = useContext(ItemsDispatchContext);
  if (!dispatch) throw new Error('ItemsProvider not found');
  return dispatch;
}
