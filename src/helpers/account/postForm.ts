import axios from 'axios';

export const postForm = async (formData: any) => {
    const baseUrl = 'http://localhost:3000/api';
    const url = `${baseUrl}/signin`;
    const { data } = await axios.post(url, formData);

    if (data.err) return data;

    const { user, token } = data;

    localStorage.user = JSON.stringify(user);
    localStorage.token = JSON.stringify(token);

    console.log(localStorage.token);
    return data;
};
