import express from 'express';
import UsersControllers from '../controllers/users.auth.controllers';
import UserValidations from '../middlewares/validations/users.validations';
import trimInput from '../middlewares/validations/trimInput';

const router = express.Router();

router.post('/signup', UserValidations.checkCreateAccountBody, trimInput, UsersControllers.createUser);

export default router;
