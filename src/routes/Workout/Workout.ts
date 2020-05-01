import express, { Request, Response } from 'express';
import { workoutController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    workoutController.create(req, res);
});

router.post('/find', (req: Request, res: Response) => {
    workoutController.find(req, res);
});

router.get('/', (req: Request, res: Response) => {
    workoutController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    workoutController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    workoutController.delete(req, res);
});
