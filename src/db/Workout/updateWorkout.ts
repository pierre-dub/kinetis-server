import {db} from "../../index";

export function updateWorkout(id:number, title: string, description: string, materiel: string, repetition: string, objectif: string) {
    let response:any
    console.log(title)
    return new Promise((resolve, reject) => {
        db.run("UPDATE WORKOUT SET TITLE=$title, DESCRIPTION=$description, MATERIEL=$materiel, REPETITION=$repetition, OBJ=$objectif WHERE ID=$id",
            {$id:id, $title:title ,$description:description, $materiel:materiel, $repetition:repetition, $objectif:objectif,},
            async function (err:any, res:any) {
                if (err) {
                    console.error(err)
                    reject(err);
                }
                else {
                    response = {
                        status: "success",
                        data: id,
                        message: "POST success"
                    }
                }
                resolve(response)
            })
    })
}
