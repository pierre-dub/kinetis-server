import {db} from "../../index";

export function addWorkout(id:number, title: string, description: string, materiel: string, repetition: string, objectif: string, image :any) {
    let response:any
    let dataImage:any
    if(image === undefined){
        dataImage = null
    }
    else{
        dataImage = image.base64
    }
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO WORKOUT VALUES ($id, $title, $description, $materiel, $repetition, $obj, $image)",
            {$id:id, $title:title ,$description:description, $materiel:materiel, $repetition:repetition, $obj:objectif, $image:dataImage},
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
