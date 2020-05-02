import {db} from "../../index";

export function addImage(image:any, idWorkout:any) {
    let response:any
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO IMAGE VALUES ($id,$image,$idWorkout)",
            {$image:image.base64, $idWorkout:idWorkout},
            async function (err:any, res:any) {
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
