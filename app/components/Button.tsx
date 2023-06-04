
interface ButtonProps{
  title:string;
}

const Button:React.FC<ButtonProps> = ({title}) => {
  return (
    <div 
      className="primary cursor-pointer h-12 rounded-3xl flex items-center justify-center uppercase px-6"
    >
      {title}
    </div>
  )
}

export default Button