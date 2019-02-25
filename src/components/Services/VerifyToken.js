export function VerifyToken(type, accesstoken){

    let BaseURL = 'api/v1/token/verify/';
    let actoken= {
        'token' : accesstoken
     }
    
    return new Promise((resolve, reject) =>{

        fetch(BaseURL,{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(actoken)
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