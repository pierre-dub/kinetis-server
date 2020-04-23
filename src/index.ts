import express from 'express';
import { PORT } from './config/constants';
import { userRouter, workoutRouter } from './routes';
import {addWorkout, init} from "./mySQL/workoutRequests";
import {clear} from "./mySQL/workoutRequests";
import {getWorkout} from "./mySQL/workoutRequests";

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/workout', workoutRouter);

//clear()
//init()
// addWorkout(6, 'titleeee', 'descriptioneee', 'materieleee', 'repetitioneee', 'objectifeee')
// addWorkout(7, 'titleeee', 'descriptioneee', 'materieleee', 'repetitioneee', 'objectifeee')
getWorkout();
app.listen(4000, "192.168.1.20",10000,() => {
    console.log(`Server is listening on port ${PORT}`);
});
