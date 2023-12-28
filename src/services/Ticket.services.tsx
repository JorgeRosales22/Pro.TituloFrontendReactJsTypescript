import axios from "axios";
import { Ticket } from "../types";

export const getTicketsByEmailUser = async (userEmail: string) => {
    try {
        const response = await axios.get(`http://localhost:8080/boleto/ticket?email=${userEmail}`, {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
    }
};
 
export const createTicket = async (newTicket: Ticket) => {
    try {
        const response = await axios.post('http://localhost:8080/boleto/send-message', newTicket);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
    }
};
export const editTicket = async (newTicket: Ticket) => {
    try {
        const response = await axios.patch('http://localhost:8080/boleto/editar', newTicket);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
    }
};
 
export const getAllTickets = async () => {
    try {
        const response = await axios.get('http://localhost:8080/boleto/all', {
            headers: {
                'Accept': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
    }
};       

        