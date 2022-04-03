import axios from 'axios';

export const postForm = async (formData: any) => {
    const baseUrl = 'http://localhost:3000/api';
    const url = `${baseUrl}/signin`;
    const { data } = await axios.post(url, formData);

    if (data.err) return data;

    console.log(data);
    return data;
};
