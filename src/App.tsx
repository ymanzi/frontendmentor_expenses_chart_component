import React from 'react';
import './App.css';
import HeaderElem from './components/header/HeaderElem';
import { Main } from './components/main/Main';

function App() {
  return (
    <article className='grid place-content-center h-screen w-screen'>
      <section className='w-96'>
        <HeaderElem />
        <Main />
      </section>
    </article>
  );
}

export default App;
