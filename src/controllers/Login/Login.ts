import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {addWorkout} from "../../db/Workout/postWorkout";
import {getWorkout, getWorkoutWithTitle} from "../../db/Workout/getWorkout";
import {authentication} from "../../db/Login/authentication";

export class LoginController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/POST Login");
        authentication(req.body.username,req.body.password).then((response) => {res.json(response)})
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}
