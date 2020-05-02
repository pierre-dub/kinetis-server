import { WorkoutController} from "./Workout/Workout";
import {UserController} from "./User/User";
import {ImageController} from "./Image/Image";

const workoutController = new WorkoutController();
const userController = new UserController();
const imageController = new ImageController();

export {
    workoutController,
    userController,
    imageController
};
