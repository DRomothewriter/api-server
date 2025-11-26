import express from 'express';
import { getUsers, login, uploadPic, uploadDoc, showUploadForm } from '../usuarios/controllador';
import { authMiddleware } from '../middlewares/auth';
// import { getApp } from 'app/auth/model';
// const app = getApp; //Esto es lo que hacer el Router
import { upload } from '../middlewares/upload';
const router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *      tags: [Users]
 *      description: Listar usuarios
 *      parameters:
 *        - in: query
 *          name: token
 *          description: auth user token
 *          schema:
 *           type: string
 *      responses:
 *          200:
 *            description: success
 *          401:
 *            description: missing token
 */

router.post('/login', login);

router.get('/', authMiddleware, getUsers);

router.post('/profileImg', upload.single('image'), uploadPic);
router.get('/profileImg', showUploadForm)
router.post('/documents', upload.single('documents'), uploadDoc)
export default router;
