import express, { Request, Response } from 'express';
import { loginController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    loginController.create(req, res);
});

router.post('/find', (req: Request, res: Response) => {
    loginController.find(req, res);
});

router.get('/', (req: Request, res: Response) => {
    loginController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    loginController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    loginController.delete(req, res);
});