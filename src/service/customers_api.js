const apiURL = 'http://localhost:3002/customers';
export const getCustomers = ()=>{
    return fetch(apiURL).then((response)=>{

        return response.json();
    });

};