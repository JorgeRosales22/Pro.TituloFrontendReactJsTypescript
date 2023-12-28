
export type FormInputs = {
    nameUser?: string;
    lastNameUser?: string;
    emailUser: string;
    password: string;
    confirmPassword?: string;
    title?: string;
    contain?:string;
    state?: string;
}

export type Ticket = {
    tickedId?: number,
    userId?: number,
    state?: string,
    title: string,
    createdAt: string,
    content: string,
    destiny: string
}

export type User = {
    userId?: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    rol: number 
}