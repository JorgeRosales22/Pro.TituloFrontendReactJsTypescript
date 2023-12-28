import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../..";
import { editTicket } from "../../../services/Ticket.services";
import { FormInputs, Ticket } from "../../../types";

type EditTicketProps = {
    ticket : Ticket,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const ResponseAdmin = ({ticket,setIsModalOpen}:EditTicketProps) => {
    console.log("🚀 ~ file: responseFormTicket.component.tsx:10 ~ ResponseAdmin ~ ticket:", ticket)
    const { tickedId, userId, title, createdAt} = ticket;
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormInputs>();
    

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const newTicket: Ticket = {
            tickedId:tickedId,
            userId: userId,
            state: data.state,
            title: title, 
            createdAt: createdAt,
            content: data?.contain ? data?.contain : '',
            destiny:"Administrador"
        }
        setIsModalOpen(false)
        await editTicket(newTicket);
        alert("Ticket Editado")
    }

    return(
        <>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="estado"
                    placeholder="Titulo del ticket"
                    name="state"
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

                <button type="submit" className="btn btn-primary">Responder Ticket</button>
            </form>
        </>
    )
}

export default ResponseAdmin;
