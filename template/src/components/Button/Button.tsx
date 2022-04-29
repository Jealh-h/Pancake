import './Button.css'

interface IProps {
  children: any,
  onClick: () => {}
}

const Button: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <button className="btn" onClick={props.onClick}  >{props.children}</button>
}

export default Button