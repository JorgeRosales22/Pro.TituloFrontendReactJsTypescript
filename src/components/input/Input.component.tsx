import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

import { FormInputs } from "../../types";

type inputsName = "password" | "nameUser" | "lastNameUser" | "emailUser" | "confirmPassword" | "title" | "state" ;

type InputProps = {
    label: string;
    placeholder: string;
    name: inputsName;
    type: "text" | "password" | "email";
    register: UseFormRegister<FormInputs >
    settings: RegisterOptions<FormInputs, inputsName> | undefined
    errors: FieldErrors<FormInputs>
}

const Input = ({
    label,
    placeholder,
    name,
    type,
    register,
    settings,
    errors
}: InputProps) => {
    return(
            <div className="mb-3">
                <div className="">
                    <label className="form-label" htmlFor={name}>{label}:</label>
                </div>
                <div className="">    
                    <input className="form-control"
                        type={type}
                        placeholder={placeholder}
                        id={name}
                        {...register(name , settings)}/>
                    
                    {errors[name] && (<p role="alert">{errors[name]?.message}</p>)}
                </div>
            </div>
    )
}
export default Input;