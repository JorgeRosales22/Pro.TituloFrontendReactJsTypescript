import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../..";
import { loginUser } from "../../../services/Usuario.services";
import { FormInputs, User } from "../../../types";

type FormLoginProps = { 
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    setUserLogged: Dispatch<SetStateAction<User>>
}
const FormLogin = ({ setIsModalOpen, setUserLogged }: FormLoginProps) =>{
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async ({emailUser, password}) => {
        const userlogged: User = await loginUser(emailUser, password)
        
        if(userlogged.name !== "AxiosError"){
            sessionStorage.setItem("user", JSON.stringify(userlogged))
            setUserLogged(userlogged);
            setIsModalOpen(false) 
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    }
    
    return (
        <form className="item-aling-center" onSubmit={handleSubmit(onSubmit)}>
            <h4>Inicio de Sesión</h4>
            <Input
               label="Correo electronico"
               placeholder="Ingrese su correo"
               name="emailUser"
               type="email"
               register={register}
               settings={{
                required: "Ingrese su correo electronico",
                pattern: {
                    value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                    message: "Correo incorrecto"
                }
               }}
               errors={errors}
            />
            <Input
               label="Contraseña"
               placeholder="Ingrese una contraseña"
               name="password"
               type="password"
               register={register}
               settings={{
                required: "Su contraseña es requerida",
                minLength: {
                    value: 3,
                    message: "Su contraseña es muy debil"
                },
                maxLength: {
                    value: 16,
                    message: "Su contraseña es muy extensa"
                }
               }}
               errors={errors}
            />

            <div className="d-grid gap-2 col-6 mx-auto">
                <div className="form-check">
                    <button className="btn btn-success" type="submit">Ingresar</button>
                </div>
            </div>
        </form>
    )

}
export default FormLogin;