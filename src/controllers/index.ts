import { WorkoutController} from "./Workout/Workout";
import { UserController } from './User/User';

const userController = new UserController();
const workoutController = new WorkoutController();

export {
    userController,
    workoutController
};
