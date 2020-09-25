import { connect } from 'mongoose'

const db = async () => {
    try {
        await connect('mongodb://localhost/node-ts-app', {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log('DB is conected');
    } catch (error) {
        console.log(error)
    }
}

db();