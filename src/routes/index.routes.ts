import { Router } from 'express'
const router: Router = Router();

//Controller
import indexController from '../controllers/index.controller'

router.get('/', indexController.index);

export default router;