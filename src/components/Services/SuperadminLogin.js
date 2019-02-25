export function SuperadminLogin(type, userData){

    let BaseURL = 'api/v1/token/';
    return new Promise((resolve, reject) =>{

        fetch(BaseURL,{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}