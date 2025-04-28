import axios from 'axios';
import { ICliente } from './../types/ICliente';

const API_URL = 'http://localhost:3000/api/clientes';

export const pegarTodosClientes = async (): Promise<ICliente[]> => {
  const response = await axios.get<ICliente[]>(API_URL);
  console.log(response);
  return response.data;
};

export const pegarClientePorId = async (id: number): Promise<ICliente> => {
  const response = await axios.get<ICliente>(`${API_URL}/${id}`);
  return response.data;
};

export const criarCliente = async (cliente: ICliente): Promise<ICliente> => {
  const response = await axios.post<ICliente>(API_URL, cliente);
  return response.data;
};

export const atualizarCliente = async (id: number, cliente: ICliente): Promise<ICliente> => {
  const response = await axios.put<ICliente>(`${API_URL}/${id}`, cliente);
  return response.data;
};