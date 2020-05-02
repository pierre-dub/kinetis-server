import {db} from "../../index";

export function addWorkout(id:number, title: string, description: string, materiel: string, repetition: string, objectif: string, image :any) {
    let response:any
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO WORKOUT VALUES ($id, $title, $description, $materiel, $repetition, $obj, $image)",
            {$id:id, $title:title ,$description:description, $materiel:materiel, $repetition:repetition, $obj:objectif, $image:image.base64},
            async function (err:any, res:any) {
                if (err) {
                    console.error(err)
                    reject(err);
                }
                else {
                    response = {
                        status: "success",
                        data: `${this.lastID}`,
                        message: "POST success"
                    }
                }
                resolve(response)
            })
    })
}
