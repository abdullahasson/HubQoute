// style
import "./button.css"

const Button = ({
    id,
    variant , 
    className ,
    children ,
    onClick ,
    style ,
    type,
}) => {

    return (
        <button 
            id={id}
            type={type} 
            onClick={onClick} 
            className={`btn ${variant} ${className}`} 
            style={style}
        >

            {children}
            
        </button>
    )

}

export default Button