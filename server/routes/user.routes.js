import express from 'express';
import UsersControllers from '../controllers/users.controllers';
import UserValidations from '../middlewares/validations/users.validations';

const router = express.Router();

router.post('/signup', UserValidations.checkCreateAccountBody, UsersControllers.createUser);

export default router;
