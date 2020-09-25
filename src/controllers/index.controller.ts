import { Request, Response } from 'express'

class IndexController {
    public index (req: Request, res: Response) {
        res.render('index');
    }
}

const indexController = new IndexController();
export default indexController