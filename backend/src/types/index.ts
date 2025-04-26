export interface Cliente {
    name: string;
    email: string;
    telefone: string;
    endereço: string;
}

export interface RegisterClientRequest {
    name: string;
    email: string;
    telefone: string;
    endereço: string;
}

export interface ListClientsResponse {
    clientes: Cliente[];
}