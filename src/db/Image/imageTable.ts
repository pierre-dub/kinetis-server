import {db} from "../../index";

export const createImageTable = async () => {
    await db.run("CREATE TABLE IF NOT EXISTS IMAGE(ID integer primary key not null, IMAGE blob, WORKOUTID integer not null)",
        {},
        function (err: any) {
            if (err)
                console.error(err)
            else
                console.log("CREATE IMAGE")
        });
}

export const fillImageTable = async () => {
    await dropImageTable();
    await createImageTable();
}

export const dropImageTable = async () => {
    db.run("DROP TABLE  IF EXISTS IMAGE ", {},function (err:any) {
        if(err)
            console.error(err)
        else
            console.log("DROP IMAGE")
    });
}
