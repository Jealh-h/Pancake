import './Header.css'
import logo from '../../logo.svg'
import Button from '../Button/Button.tsx'
import { Link } from 'react-router-dom'

const Header: React.FC = (props) => {
  return <header className="App-header">
    <div className='header-head'>
      <div className='header-logo'>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <menu className='header-menu'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <a href={"https://typicode.github.io/husky/#/"}>Github</a>
      </menu>
    </div>

    <div className='header-tail'>
      <Button onClick={() => {
        console.log("hello");
      }}>切换语言</Button>
    </div>
  </header>
}

export default Header;