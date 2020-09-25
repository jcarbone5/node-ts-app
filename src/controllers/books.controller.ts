import { Request, Response } from 'express'

//Model
import BookModel, { IBook } from '../models/book.model'

class BooksController {
    public async renderList(req: Request, res: Response) {
        const Books: IBook[] = await BookModel.find();
        res.render('books/list', { Books });
    }

    public renderAdd(req: Request, res: Response) {
        res.render('books/add');
    }

    public async renderEdit(req: Request, res: Response) {
        const { id } = req.params;
        
        const book = await BookModel.findById(id);
        
        res.render('books/edit', { book });
    }

    public async updateBook(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { name, author, imageURL } = req.body;

        await BookModel.findByIdAndUpdate(id, { name, author, imageURL });

        res.redirect('/books/list');
    }

    public async createBook(req: Request, res: Response) {
        const { name, author, imageURL } = req.body;

        const newBook: IBook = new BookModel({
            name,
            author,
            imageURL
        });

        await newBook.save();

        res.redirect('/books/list');
    }

    public async removeBook(req: Request, res: Response) {
        const { id } = req.params;

        await BookModel.findByIdAndRemove(id);

        res.redirect('/books/list');
    }
}

const booksController = new BooksController();
export default booksController;