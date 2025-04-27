export interface Cliente {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
}

export interface RegisterClientRequest {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
}

export interface ListClientsResponse {
    clientes: Cliente[];
}