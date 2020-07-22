import axios from 'axios';


export function getDataFromApi() {

    return axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
        .then(async response => {
            if (response.data.status >= 400) {
                throw response.data;
            }
            console.log(response.data);
            return response.data;
        })
        .catch(async err => {
            throw err;
        });
}
