import { WorkoutController} from "./Workout/Workout";
import {LoginController} from "./Login/Login";

const workoutController = new WorkoutController();
const loginController = new LoginController()

export {
    workoutController,
    loginController
};
