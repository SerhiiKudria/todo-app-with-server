import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://80whj8-8080.preview.csb.app/'
})

export const getTasks = () => httpClient.get('/contacts')

export const createNewTask = values => httpClient.post('/contacts', values)

export const updateTask = (id, values) =>
  httpClient.patch(`/contacts/${id}`, values)

export const deleteTask = id => httpClient.delete(`/contacts/${id}`)
