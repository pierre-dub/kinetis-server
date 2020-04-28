import {db} from "../../index";

export function authentication(username:string, password: string) {
    let response:any
    return new Promise((resolve, reject) => {
        let res = db.all("SELECT * FROM USER WHERE USERNAME=$username AND PASSWORD=$password",
            {$username:username, $password: password},
            async function (err:any,res:any) {
                if (err) {
                    console.error(err)
                    reject(err);
                }
                else if (res.length === 0){
                    response = {
                        status: "401",
                        message: "Unauthorised"
                    }
                }
                else{
                    console.assert(res.length===1)
                    response = {
                        status: "200",
                        data: res,
                        message: "POST success"
                    }
                }
                resolve(response)
            })

    })
}
