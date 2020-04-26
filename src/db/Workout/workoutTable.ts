import {db} from "../../index";
import {addWorkout} from "./postWorkout";

export function init() {
    db.run("CREATE TABLE IF NOT EXISTS WORKOUT(ID integer primary key not null, TITLE text, DESCRIPTION text, MATERIEL text, REPETITION text, OBJ text)",
        {},
        function (err: any) {
            if (err)
                console.error(err)
            else
                console.log("WORKOUT init")
        });
}

export async function fillDatabase() {
    await clear();
    await init();
    await addWorkout(
        1,
        'Jump Squat',
        'Partir les jambes fléchies (position chaise).\nSauter en l\'air le corps tendu.\nRedescendre doucement en position chaise',
        '',
        '3 séries de 6 à 10 sauts consécutifs',
        'objectif'
    );
    await addWorkout(
        2,
        'Planche latérale',
        'Se mettre sur le coude à l\'aplomb de l\'épaule.\nGainer le corps et tenir la position.\nChanger de côté.',
        'Tapis de sol',
        'Tenir la position entre 15 et 45 secondes de 3 à 5 fois.',
        'objectif'
    );
    await addWorkout(
        3,
        'Montée de genoux',
        'Partir de profil avec la jambe droite sur la marche haute.\nMonter la jambe gauche à l\'horizontale en gardant le buste droit.\n',
        'Marche haute',
        'Effectuer 15 à 20 répétitions par jambe à chaque séquence de 20 secondes.',
        'objectif'
    );
}

export function clear(){
    db.run("DROP TABLE  IF EXISTS WORKOUT ", {},function (err:any) {
        if(err)
            console.error(err)
        else
            console.log("WORKOUT cleared")
    });
}
