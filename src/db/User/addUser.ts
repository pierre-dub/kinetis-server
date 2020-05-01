import {db} from "../../index";

export function addUser(username:string, password: string, email: string) {
    let response:any
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO USER VALUES ($username, $password, $email)",
            {$username:username, $password:password ,$email:email},
            function (err:any) {
                if (err) {
                    console.error(err)
                    reject(err);
                }
                else {
                    response = {
                        status: "success",
                        data: null,
                        message: "POST success" /* Or optional success message */
                    }
                }
                resolve(response)
            })
    })
}
