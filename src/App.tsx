import type { Component } from 'solid-js';

import styles from './styles/App.module.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Home />
    </div>
  );
};

export default App;
