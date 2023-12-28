import { MouseEvent } from "react";

type ButtonProps ={
    type: "button" | "submit"
    text: string
    disabled?: boolean
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void 
}

const Button = ({
    type,
    text,
    disabled,
    onClick,
}: ButtonProps) =>{
    return(
        <div>
            <button type={type} disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
export default Button;




