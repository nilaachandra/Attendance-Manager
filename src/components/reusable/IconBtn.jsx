import { Link } from "react-router-dom"
import Button from "./Button"

const IconBtn = ({className, icon, onClick, desc, href}) => {
    const classes= `w-full btnHover flex justify-between items-start raleway-regular ${className || ''}`
  return (
    <Link to={href}>
    <Button className={classes} onClick={onClick}>
        {desc && <span className="ml-[4rem] text-[1.2rem] font-bold">{desc}</span>}
        {icon && <span className="mr-[2rem]">{icon}</span>}
    </Button>
    </Link>
  )
}

export default IconBtn