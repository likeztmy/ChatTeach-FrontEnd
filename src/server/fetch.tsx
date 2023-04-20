export  async function postData (url = '', data = {},method: 'POST'){
    // Default options are marked with *
    const preurl='http://127.0.0.1:5000';

    const response = await fetch(preurl+url, {
        method, 
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

        return response.json(); // parses JSON response into native JavaScript objects
}

export  async function getJson (url = ''){
// Default options are marked with *
    const preurl='http://127.0.0.1:5000';
    const response = await fetch(preurl+url, {
        method:'GET', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
    });

    return response.json(); // parses JSON response into native JavaScript objects
}
