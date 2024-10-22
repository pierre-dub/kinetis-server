import {db} from "../../index";

export async function getWorkout() {
    let response: any;
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM WORKOUT", async function (err: any, res: any) {
            if (err) {
                reject(err);
                console.error(err);
            }
            else {
                response = {
                    status: "success",
                    data: res,
                    message: "GET success"
                }
                resolve(response)
            }
        })
    })
}

