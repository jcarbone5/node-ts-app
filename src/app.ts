import express, { json, urlencoded } from 'express'
import path from 'path'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import Handlebars from 'handlebars'
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access'

import indexRoutes from './routes/index.routes'
import booksRoutes from './routes/books.routes'

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    extname: 'hbs',
    layoutsDir: path.join(app.get('views'), "layouts"),
    partialsDir: path.join(app.get('views'), "partials"),
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

//Routes
app.use(indexRoutes);
app.use('/books', booksRoutes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Export app
export default app;