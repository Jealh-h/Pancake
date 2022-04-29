import { SVGProps } from 'react'
import './About.css'
import { SiTypescript, SiMobx, SiReactrouter, SiReact } from 'react-icons/si'
import { MdGTranslate } from 'react-icons/md'
const About: React.FC = () => {
  return <section>
    <div className='about-body'>
      <h1>About&nbsp;:</h1>
      <div className='line'></div>
      <div className='feats'>
        <ul>
          <li><h3>{<SiTypescript color='#007ACC' />} TypeScript</h3></li>
          <li><h3>{<MdGTranslate />} react-i18next</h3></li>
          <li><h3>{<SiReactrouter />} react-router-dom (v6)</h3></li>
          <li><h3><SiReact color='#61DAFB' /> react-icons </h3></li>
          <li><h3><SiMobx color='#DE5D16' /> mobx (v6) (Expect support for react V18)</h3></li>
        </ul>
      </div>
    </div>
  </section>
}

export default About;
