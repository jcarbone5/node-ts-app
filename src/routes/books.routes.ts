import { Router } from 'express'
const router: Router = Router();

//Controller
import booksController from '../controllers/books.controller'

router.get('/list', booksController.renderList);
router.get('/add', booksController.renderAdd);
router.post('/add', booksController.createBook);
router.get('/edit/:id', booksController.renderEdit);
router.post('/edit/:id', booksController.updateBook);
router.get('/remove/:id', booksController.removeBook);

export default router;