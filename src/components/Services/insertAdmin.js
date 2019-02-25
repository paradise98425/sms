export function insertAdmin(type, adminData){

    console.log(adminData);
        let BaseURL = 'api/v1/admin/users/';

        let datas = {
            username: adminData.username,
            email: adminData.email,
            password: adminData.password
        }
    
        return new Promise((resolve, reject) =>{
    
            fetch(BaseURL,{
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'HTTP-SCHEMA': 'public',
                    'Authorization': 'Bearer ' + localStorage.getItem('access')
                  },
                body: JSON.stringify(datas)
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