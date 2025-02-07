import express from 'express';
import {imageRouter, userRouter, workoutRouter} from './routes';

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/workout', workoutRouter);
app.use('/user', userRouter);
app.use('/image',imageRouter);

const sqlite = require("sqlite3").verbose();
export const db = new sqlite.Database("./db/kinetisDatabase.db",sqlite.OPEN_READWRITE, (err:any) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the chinook database.');
    }
})

app.listen(process.env.PORT,() => {
    console.log(`Server is listening on port `+ process.env.PORT);
})
