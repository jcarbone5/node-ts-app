import app from './app'
import './database'

//Start server
const start = async () => {
    try {
        await app.listen(app.get('port'));
        console.log('Server on port', app.get('port'));
    } catch (error) {
        console.log(error);
    }
}

start();