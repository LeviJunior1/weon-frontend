import axios from 'axios';

const urlJsonBox = "https://jsonbox.io/";
const key = "box_91ac575b2a8792ba99b3";
const url = `${urlJsonBox}${key}`

async function create(contact) {
    return await axios.post(url, contact).then(response => response)
}

async function read() {
    return await axios.get(url).then(response => response.data)
}

async function update(id, contact) {
    await axios.put(`${url}/${id}`, contact).then(response => {
        console.log(response.data)
    })
}

async function deleteContact(id) {
    return await axios.delete(`${url}/${id}`).then(response => response)
}

export default { create, read, update, deleteContact };