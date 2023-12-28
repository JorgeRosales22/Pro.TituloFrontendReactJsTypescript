import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { User } from "../types";

export const loginUser = async (email: string, password: string) => {
	try {
		
        const response = await axios.post(`http://localhost:8080/usuario/login_user?email=${email}&password=${password}`,
        {headers: 
            { 'Accept': 'application/json', }
        });
		return(response.data);
     }
	catch (error) {
		return error; }
}

export const registerUser = async (user : User) =>{
    try {

        const response = await axios.post(`http://localhost:8080/usuario/register_user`,user,
        {headers:
             { 'Accept': 'application/json', }
        });
        return (response.data);
    }
    catch (error) {
        console.error('Error login:', error); }
}

export const logOutUser = (setUserLogged: Dispatch<SetStateAction<User>>) =>{
    if(sessionStorage.getItem('user')){
        alert("Sesión Cerrada con exito")
        sessionStorage.removeItem('user');
        setUserLogged({
            userId: 0,
            name: "",
            lastName: "",
            email: "",
            password: "",
            rol: 0
        })
    }
}       

