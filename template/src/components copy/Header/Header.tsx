import './Header.css'
import logo from '../../logo.svg'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useLang from 'src/hooks/useLanguage'

const Header: React.FC = (props) => {
  const { t } = useTranslation();
  const [lang, setLang] = useLang();
  return <header className="App-header">
    <div className='header-head'>
      <div className='header-logo'>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <menu className='header-menu'>
        <Link to={"/"}>{t("Home")}</Link>
        <Link to={"/about"}>{t("About")}</Link>
        <a href={"https://github.com/Jealh-h/Pancake"}>GitHub</a>
      </menu>
    </div>

    <div className='header-tail'>
      <Button onClick={() => {
        setLang()
      }}>{t('切换语言')}</Button>
    </div>
  </header>
}

export default Header;