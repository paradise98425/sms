export function putModule(type, moduleData){

   //console.log('putmodule is called now');
        //console.log(moduleData)
         let BaseURL = 'api/v1/admin/schools/' + moduleData.schoolpk;
          console.log(BaseURL);

          let sample = { domain_url: moduleData.domain_url,
          schema_name: moduleData.schema_name,
          school_name: moduleData.school_name,
          module: ['student_management'] }
    
        return new Promise((resolve, reject) =>{
    
            fetch(BaseURL,{
                method: 'put',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'HTTP-SCHEMA': 'public',
                    'Authorization': 'Bearer ' + localStorage.getItem('access')
                  },
                body: JSON.stringify(sample)
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