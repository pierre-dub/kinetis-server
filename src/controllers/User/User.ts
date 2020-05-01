import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {authUser} from "../../db/User/authUser";
import {addUser} from "../../db/User/addUser";

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/POST Login");
        addUser(req.body.surname,req.body.name,req.body.email,req.body.password,req.body.kine).then((response) => {res.json(response)})
    }

    public verify(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        console.log("/POST Login");
        authUser(req.body.email,req.body.password).then((response) => {res.json(response)})
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
