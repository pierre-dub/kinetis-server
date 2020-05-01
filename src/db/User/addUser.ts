import {db} from "../../index";

export function addUser(surname:string,name:string, email:string, password: string, kine: boolean) {
    let response:any
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO USER VALUES ($id,$surname, $name, $password, $email, $kine)",
            {$surname:surname,$name:name, $password:password ,$email:email,$kine:kine},
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
