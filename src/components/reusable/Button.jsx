
const Button = ({className, href, onClick, children}) => {
    const classes = `flex justify-center 
    items-center h-11 rounded-lg border border-black bg-black text-white px-4 ${className || ''}`

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
    
    const renderLink = () => (
        <a href={href} className={className}>
            {children}
        </a>
    )
    return href ? renderLink() : renderButton();
}

export default Button