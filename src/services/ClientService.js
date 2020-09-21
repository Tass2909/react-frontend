import axios from 'axios';
const CLIENT_API_BASE_URL = "http://localhost:8080/api/v1/clients";
class ClientService {

    getClients() {
        return axios.get(CLIENT_API_BASE_URL);
    }
    createClient(client) {
        return axios.post(CLIENT_API_BASE_URL, client);
    }

    getClientById(idClient) {
        return axios.get(CLIENT_API_BASE_URL + '/' + idClient);
    }

    updateClient(client, clientId) {
        return axios.put(CLIENT_API_BASE_URL + '/' + clientId, client);
    }
}

export default new ClientService()