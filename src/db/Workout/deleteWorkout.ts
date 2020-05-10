import {db} from "../../index";

export async function deleteWorkout(id:any) {
    let response: any;
    return new Promise((resolve, reject) => {
        db.all("DELETE FROM WORKOUT WHERE ID=$id",{$id:id}, async function (err: any, res: any) {
            if (err) {
                reject(err);
                console.error(err);
            }
            else {
                response = {
                    status: "success",
                    data: res,
                    message: "DELETE success"
                }
                resolve(response)
            }
        })
    })
}