import db from "./databaseConnexion";

export function init() {
    try{
        db.run("CREATE TABLE IF NOT EXISTS WORKOUT(ID integer primary key not null, TITLE text, DESCRIPTION text, MATERIEL text, REPETITION text, OBJ text)")
        console.log("init");
    }catch (e) {
        console.error(e)
    }
}

export function clear(){
    try {
        db.run("DROP TABLE  IF EXISTS WORKOUT ");
        console.log("clear");
    }catch (e) {
        console.error(e)
    }
}

export function getWorkout() {
    db.all("SELECT * FROM WORKOUT", function (err: any, res: any) {
        console.log(res)
    });
}

export function addWorkout(id:number, title: string, description: string, materiel: string, repetition: string, objectif: string) {
    db.run("INSERT INTO WORKOUT VALUES ($id, $title, $description, $materiel, $repetition, $obj)",
        {$id:id, $title:title ,$description:description, $materiel:materiel, $repetition:repetition, $obj:objectif},
        function (err:any) {
            if(err)
                console.log(err)
            else
                console.log("Entry added")
            })
}
