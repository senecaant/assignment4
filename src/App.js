import React from 'react';
//import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

// Import Components
import Header from './components/Header/Header';

// Import Pages
import History from './pages/History/History';
import Rockets from './pages/Rockets/Rockets';
import RocketInfo from './pages/RocketInfo/RocketInfo';
import About from './pages/About/About';

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={History} />
          <Route exact path="/rockets" component={Rockets} />
          <Route path="/rockets/:urlId" component={RocketInfo} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
