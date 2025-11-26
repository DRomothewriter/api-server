import { Router, json } from 'express';
import { login, signup } from './controller';
import * as controller from './controller';

const router = Router();
//express.json() Es un closure. Lo que retorna es una funcion. Lo que necesitamos es esa función que retorna y no la función
router.post('/login', json(), login);
router.post('/signup', signup);


router.get('/login', controller.getLogin);
router.get('/logout', controller.getLogout);

router.get('/login/google', );
router.get('/google/callback', );

export default router;
