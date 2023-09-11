import React from 'react';
import './App.module.css';
import Header from './component/Header/Header'
import Trending from './component/Trending/Trending';
import New from './component/New/New';
import Popular from './component/Popular/Popular';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Trending />
        <New />
        <Popular />
      </main>
    </div>
  );
}

export default App;
