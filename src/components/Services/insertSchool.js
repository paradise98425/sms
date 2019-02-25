export function insertSchool(type, schoolData){

//console.log(schoolData);
    let BaseURL = 'api/v1/admin/schools/';

        // let schoolinfo = { 
        //     domain_url: 'lfes.pathsalaa',
        //     schema_name: 'lfea',
        //     school_name: 'little flowera'
        // }
        
    return new Promise((resolve, reject) =>{

        fetch(BaseURL,{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'HTTP-SCHEMA': 'public',
                'Authorization': 'Bearer ' + localStorage.getItem('access')
              },
            body: JSON.stringify(schoolData)
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