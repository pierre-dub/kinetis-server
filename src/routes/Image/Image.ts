import express, { Request, Response } from 'express';
import { imageController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    imageController.verify(req, res);
});

router.post('/upload', (req: Request, res: Response) => {
    imageController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    imageController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    imageController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    imageController.delete(req, res);
});
