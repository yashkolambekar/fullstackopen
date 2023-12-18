import axios from "axios";
const baseUrl = "http://localhost:3001/persons/";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(`${baseUrl}`, newObject);
    return request.then(response => response.data)
}

const delPerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.status)
}

const updateValue = (id, data) => {
    const request = axios.put(`${baseUrl}/${id}`, data);
    return request.then(response => response.data);
}

export default { getAll, create, delPerson, updateValue}