import {db} from "../../index";
import {addWorkout} from "./addWorkout";

export const createWorkoutTable = async () => {
    await db.run("CREATE TABLE IF NOT EXISTS WORKOUT(ID integer primary key not null, TITLE text, DESCRIPTION text, MATERIEL text, REPETITION text, OBJ text, IMAGE blob)",
        {},
        function (err: any) {
            if (err)
                console.error(err)
            else
                console.log("CREATE WORKOUT")
        });
}

export const fillWorkoutTable = async () => {
    await dropWorkoutTable();
    await createWorkoutTable();
    await addWorkout(
        1,
        'Jump Squat',
        'Partir les jambes fléchies (position chaise).\nSauter en l\'air le corps tendu.\nRedescendre doucement en position chaise',
        '',
        '3 séries de 6 à 10 sauts consécutifs',
        'objectif',
        null
    );
    await addWorkout(
        2,
        'Planche latérale',
        'Se mettre sur le coude à l\'aplomb de l\'épaule.\nGainer le corps et tenir la position.\nChanger de côté.',
        'Tapis de sol',
        'Tenir la position entre 15 et 45 secondes de 3 à 5 fois.',
        'objectif',
        null
    );
    await addWorkout(
        3,
        'Montée de genoux',
        'Partir de profil avec la jambe droite sur la marche haute.\nMonter la jambe gauche à l\'horizontale en gardant le buste droit.\n',
        'Marche haute',
        'Effectuer 15 à 20 répétitions par jambe à chaque séquence de 20 secondes.',
        'objectif',
        null
    );
}

export const dropWorkoutTable = async () => {
    db.run("DROP TABLE  IF EXISTS WORKOUT ", {},function (err:any) {
        if(err)
            console.error(err)
        else
            console.log("DROP WORKOUT")
    });
}
