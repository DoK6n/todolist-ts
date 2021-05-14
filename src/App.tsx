import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Create';
import { ItemsProvider } from './hooks/itemsContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const Template = styled.div`
  border-radius: 20px;
  padding: 20px;
  width: 50vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 3px 3px #dcdddf;
`;

function App() {
  return (
    <ItemsProvider>
      <GlobalStyle />
      <Template>
        <Header />
        <Content />
        <Footer />
      </Template>
    </ItemsProvider>
  );
}

export default App;
