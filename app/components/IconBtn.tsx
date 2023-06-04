import Link from "next/link"

interface IconBtnProps {
  icon: any;
  link: string;
}

const IconBtn:React.FC<IconBtnProps> = ({icon, link}) => {
  return (
    <Link href={link} target="_blank">
      <div className="primary w-10 h-10 rounded-full p-2 text-xl flex items-center justify-center">{icon}</div>
    </Link>
  )
}

export default IconBtn