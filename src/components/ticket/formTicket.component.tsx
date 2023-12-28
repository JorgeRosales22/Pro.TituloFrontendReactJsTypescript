import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "..";
import { createTicket } from "../../services/Ticket.services";
import { FormInputs, Ticket, User } from "../../types";

type NewCreateTicketProps = {
    user : User,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const NewCreateTicket = ({user,setIsModalOpen}:NewCreateTicketProps) =>{

    const {userId, name, lastName} = user
    const fecha = new Date()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const newTicket: Ticket = {
            userId: userId,
            state:"Pendiente",
            title: data?.title ? data?.title : "", 
            createdAt: fecha.toDateString(),
            content: data?.contain ? data?.contain : '',
            destiny:"Administrador"
        }
        setIsModalOpen(false)
        await createTicket(newTicket);
        alert("Ticket creado")
    }

    return(
        <>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <label>De : {`${name} ${lastName}`}  </label>
                <Input
                    label="Titulo"
                    placeholder="Titulo del ticket"
                    name="title"
                    type="text"
                    register={register}
                    settings={{
                    required: "Titulo requerido",
                    minLength: {
                        value: 3,
                        message: ":3"
                    }
                    }}
                    errors={errors}
                />
                <label>Contenido: </label>
                <textarea 
                id="contain"
                placeholder="Aqui ponga todo lo relacionado con su consulta" 
                rows={4} 
                cols={50}
                {...register('contain')}
                />

                <button type="submit" className="btn btn-primary">Crear Ticket</button>
            </form>
        </>
    )
}

export default NewCreateTicket;
