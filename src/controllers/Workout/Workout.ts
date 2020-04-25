import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {addWorkout} from "../../mySQL/workoutRequests";

export class WorkoutController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json(addWorkout(req.body.id,req.body.title,req.body.description,req.body.materiel,req.body.repetition,req.body.obj));
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("touched Workout")
        res.json({ message: 'GET /workout request received' });
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}