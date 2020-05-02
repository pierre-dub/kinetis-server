import {db} from "../../index";

export function addWorkout(id:number, title: string, description: string, materiel: string, repetition: string, objectif: string) {
    let response:any
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO WORKOUT VALUES ($id, $title, $description, $materiel, $repetition, $obj)",
            {$id:id, $title:title ,$description:description, $materiel:materiel, $repetition:repetition, $obj:objectif},
            async function (err:any, res:any) {
                if (err) {
                    console.error(err)
                    reject(err);
                }
                else {
                    response = {
                        status: "success",
                        data: `${this.lastID}`,
                        message: "POST success" /* Or optional success message */
                    }
                }
                resolve(response)
            })
    })
}
