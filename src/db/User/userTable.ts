import {db} from "../../index";
import {addUser} from "./addUser";

export const createUserTable = async () => {
    await db.run("CREATE TABLE IF NOT EXISTS USER (ID integer primary key not null, SURNAME text, NAME text,PASSWORD text,EMAIL text,KINE boolean)",
        {},
        function (err: any) {
            if (err)
                console.error(err)
            else
                console.log("CREATE USER")
        });
}

export const fillUserTable = async () => {
    try {
       await dropUserTable();
       await createUserTable();
       await addUser("Dubreuil","Pierre","@","a",false);
    } catch (e) {
        console.log(e)
    }
}

export const dropUserTable = async () => {
    await db.run("DROP TABLE  IF EXISTS USER ", {}, function (err: any) {
        if (err)
            console.error(err)
        else
            console.log("DROP USER")
    });
}
