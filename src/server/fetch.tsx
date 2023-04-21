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

export async function compute_definite_integral(expression:string,int_var:string,left:string,right:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    formdata.append('int_var',int_var)
    formdata.append('left',left)
    formdata.append('right',right)
    const url='http://127.0.0.1:5000/api/definite-integral-step';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function generate_definite_integral_image(expression:string,int_var:string,left:string,right:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    formdata.append('int_var',int_var)
    formdata.append('left',left)
    formdata.append('right',right)
    const url='http://127.0.0.1:5000/api/definite-integral-image';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function compute_indefinite_integral(expression:string,int_var:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    formdata.append('int_var',int_var)
    const url='http://127.0.0.1:5000/api/indefinite-integral-step';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function generate_indefinite_integral_image(expression:string,int_var:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    formdata.append('int_var',int_var)
    const url='http://127.0.0.1:5000/api/indefinite-integral-image';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function derivative(expression:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    const url='http://127.0.0.1:5000/api/derivative-step';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function generate_derivative_image(expression:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    const url='http://127.0.0.1:5000/api/derivative-image';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function compute_grad(expression:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    const url='http://127.0.0.1:5000/api/grad-step';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function compute_lim(expression:string,int_var:string,tendency:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    formdata.append('var',int_var)
    formdata.append('tendency',tendency)
    const url='http://127.0.0.1:5000/api/limit-step';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}

export async function generate_lim_image(expression:string,int_var:string,tendency:string){
    const formdata = new FormData()
    formdata.append('expression',expression)
    formdata.append('var',int_var)
    formdata.append('tendency',tendency)
    const url='http://127.0.0.1:5000/api/limit-image';

    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*  redirect: 'follow', */ // manual, *follow, error
        body: formdata // body data type must match "Content-Type" header
    });

    return response.json()

}
