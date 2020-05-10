import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {addWorkout} from "../../db/Workout/addWorkout";
import {getWorkout} from "../../db/Workout/getWorkout";
import {getWorkoutWithTitle} from "../../db/Workout/getWorkoutWithTitle";
import {deleteWorkout} from "../../db/Workout/deleteWorkout";

export class WorkoutController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/POST Workout");
        addWorkout(req.body.id,req.body.title,req.body.description,req.body.materiel,req.body.repetition,req.body.obj,req.body.image).then((response) => {res.json(response)})
    }

    public find(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/POST Titled Workout");
        getWorkoutWithTitle(req.body.title).then((response) => {res.json(response)})
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/GET Workout");
        getWorkout().then((response) => {res.json(response)})
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/DELETE Workout")
        deleteWorkout(req.body.id).then((response)=>{res.json(response)})
    }
}
