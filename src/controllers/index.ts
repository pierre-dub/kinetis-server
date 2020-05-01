import { WorkoutController} from "./Workout/Workout";
import {UserController} from "./User/User";

const workoutController = new WorkoutController();
const userController = new UserController();

export {
    workoutController,
    userController,
};
