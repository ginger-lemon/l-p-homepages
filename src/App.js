import React from 'react';
import './App.module.css';
import Header from './component/Header/Header'
import Trending from './component/Trending/Trending';
import New from './component/New/New';
import Popular from './component/Popular/Popular';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Trending />
        <New />
        <Popular />
      </main>
    </div>
  );
}

export default App;
