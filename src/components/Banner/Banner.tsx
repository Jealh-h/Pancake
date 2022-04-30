import { useTranslation } from 'react-i18next';
import './Banner.css'

const Banner: React.FC = () => {
  const { t } = useTranslation();
  return <section className='banner'>
    <p className='title'>React</p>
    <div className='description'>
      <div>{t("Description")}</div>
    </div>
    <a href="https://reactjs.org/" className='start styled-btn shadow-btn'>{t("Start")}</a>
  </section>
}
export default Banner;