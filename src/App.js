import React, { useState } from 'react';
import './App.module.css';
import Header from './component/Header/Header'
import Trending from './component/Trending/Trending';
import New from './component/New/New';
import Popular from './component/Popular/Popular';
import styles from './App.module.css';
import MenuMobile from './component/MenuMobile/MenuMobile';

function App() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  function handleExtendMobileMenu() {
    setShowMenuMobile(!showMenuMobile);
  }

  function handleCloseMobileMenu() {
    setShowMenuMobile(!showMenuMobile);
  }

  return (
    <div className={styles.container}>
      <Header 
        onClick={handleExtendMobileMenu}
      />
      {showMenuMobile ? 
        (
          <MenuMobile onClick={handleCloseMobileMenu}/>
        ) : 
        null
      }
      <main className={styles.main}>
        <Trending />
        <New />
        <Popular />
      </main>
    </div>
  );
}

export default App;
