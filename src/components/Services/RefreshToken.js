
export function RefreshToken(type, refreshtoken){

    let BaseURL = 'api/v1/token/refresh/';

    let reftoken= {
                   'refresh' : refreshtoken
              }
    return new Promise((resolve, reject) =>{

        fetch(BaseURL,{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(reftoken)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
            //console.log(res);
            //console.log('hello');
        })
        .catch((error) => {
            reject(error);
        });
    });
}