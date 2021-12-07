import axios from "axios";

//auth user API loginng in 
const BASE_URL = 'https://api.github.com';
// const PAT =  "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";
// const userName=  "Zohaibkhattak15";

export const loginAuthUser = async (userName) => {
    const authUserRecord = await axios.get(`${BASE_URL}/users/${userName}`).then(data => data?.data );
    return authUserRecord;
}

export const publicGistsRecord = async () => {
    const publicGistsRecords = await axios.get(`${BASE_URL}/gists?per_page=10`).then(data => data?.data );
    return publicGistsRecords;
}

export const getPublicGist = async (id) => {
    const getPublicGistObj = await axios.get(`${BASE_URL}/gists/${id}`, {
        id : id
    }).then(data => data.data);
    return getPublicGistObj;
}