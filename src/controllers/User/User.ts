
import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {getWorkoutWithTitle} from "../../db/Workout/getWorkout";

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/GET Titled Workout");
        getWorkoutWithTitle(req.body.title).then((response) => {res.json(response)})
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({ message: 'GET /user request received' });
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}