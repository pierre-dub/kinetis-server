import { WorkoutController} from "./Workout/Workout";
import { UserController } from './User/User';
import {LoginController} from "./Login/Login";

const userController = new UserController();
const workoutController = new WorkoutController();
const loginController = new LoginController()

export {
    userController,
    workoutController,
    loginController
};
