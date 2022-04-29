// import logo from './logo.svg';
import './App.css';
// import './App.less';
import { useTranslation, trans } from 'react-i18next'
import React from 'react';
import useLang from './hooks/useLanguage';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useLang();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' />
      </Routes>

      language:{t('Welcome')}
      <h2>当前语言{lang}</h2>
      <button onClick={setLang}>切换语言</button>
      <IcBaseline11mp />
    </div>
  );
}

export function IcBaseline11mp(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zM11 5.5v6H9.5V7H8V5.5h3zm5 0v6h-1.5V7H13V5.5h3zm-.5 8.5H17v1.5h-1.5z"></path></svg>
  )
}
export default App;
