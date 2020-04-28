import {db} from "../../index";
import {addUser} from "./addUser";

export function init() {
    db.run("CREATE TABLE IF NOT EXISTS USER (USERNAME text primary key not null,PASSWORD text,EMAIL text)",
        {},
        function (err: any) {
            if (err)
                console.error(err)
            else
                console.log("USER init")
        });
}

export async function fillUserTable() {
    try {
        await clear();
        await init();
        await addUser(
            'pierre1',
            'pierre74',
            'pierre@'
        );
        await addUser(
            'pierre2',
            'pierre74',
            'pierre@'
        );
        await addUser(
            'pierre3',
            'pierre74',
            'pierre@'
        );
    }
    catch (e) {
        console.log(e)
    }
}

export function clear(){
    db.run("DROP TABLE  IF EXISTS USER ", {},function (err:any) {
        if(err)
            console.error(err)
        else
            console.log("USER cleared")
    });
}
