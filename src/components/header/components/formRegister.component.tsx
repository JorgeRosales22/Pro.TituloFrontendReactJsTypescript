import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, Validate, useForm } from "react-hook-form";
import { Input } from "../..";
import { registerUser } from "../../../services/Usuario.services";
import { FormInputs, User } from "../../../types";
type FormRegisterProps = {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const FormRegister = ({ setIsModalOpen } : FormRegisterProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues,
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const newUser: User = {
            name: data.nameUser? data.nameUser:"",
            lastName: data.lastNameUser? data.lastNameUser:"",
            email: data.emailUser? data.emailUser : "",
            password: data.password,
            rol: 2
        }
        setIsModalOpen(false)
        await registerUser(newUser);
        alert("Usuario registrado")
    };

    const validatePasswordsMatch: Validate<string | undefined, FormInputs> = (value: string | undefined): string | undefined => {
        const passwordFieldValue = getValues('password');
        return passwordFieldValue === value
          ? undefined
          : 'Contraseña incorrecta';
      };
    
    return(
        
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h5>Registrarse</h5>
                <Input
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    name="nameUser"
                    type="text"
                    register={register}
                    settings={{
                    required: "Su nombre es requerido",
                    minLength: {
                        value: 3,
                        message: "El nombre es muy corto"
                        }
                    }}
                    errors={errors}
                    />
                <Input
                    label="Apellido"
                    placeholder="Ingrese su apellido"
                    name="lastNameUser"
                    type="text"
                    register={register}
                    settings={{
                    required: "Su apellido es requerido",
                    minLength: {
                        value: 3,
                        message: "El apellido es muy corto"
                        }
                    }}
                    errors={errors}
                    />
                <Input
                    label="Email"
                    placeholder="Ingrese su correo electronico"
                    name="emailUser"
                    type="email"
                    register={register}
                    settings={{
                    required: "Su correo es requerido",
                    pattern: {
                        value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                        message: "Correo electronico no valido"
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
                    required: "Ingrese una contraseña",
                    minLength: {
                        value: 3,
                        message: "Su contraseña es muy debil"
                        },
                        maxLength: {
                            value: 16,
                            message: "Su contraseña es demasiado extensa"
                        }
                    }}
                    errors={errors}
                />
                <Input
                label="Confirmar contraseña"
                placeholder="Confirme su contraseña"
                name="confirmPassword"
                type="password"
                register={register}
                settings={{
                    required: "Confirme su contraseña",
                    validate: validatePasswordsMatch
                    }}
                    errors={errors}
                />
            <div className="form-check">
                <input className="btn btn-success" type="submit" value="Registrarse" />
            </div>
        </form>
    )
}

export default FormRegister;