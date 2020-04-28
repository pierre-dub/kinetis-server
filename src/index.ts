import express from 'express';
import { PORT } from './config/constants';
import {loginRouter, userRouter, workoutRouter} from './routes';
import {fillUserTable} from "./db/Login/userTable";

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/workout', workoutRouter);
app.use('/login', loginRouter);

const sqlite = require("sqlite3").verbose();
export const db = new sqlite.Database("./db/kinetisDatabase.db",sqlite.OPEN_READWRITE, (err:any) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the chinook database.');
    }
})
//fillUserTable()
app.listen(4000, "192.168.1.20",10000,() => {
    console.log(`Server is listening on port ${PORT}`);
})
