import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

mongoose.connect('mongodb://slam24:slam24@ds121674.mlab.com:21674/graphqlapi');
const db = mongoose.connection;
db.on('error',() => console.log('Failed to connect to database'))
	.once('open', () => console.log('Connected to DB'))

app.get('/', (req, res) => {
	res.send('Hello world, this is graphql api.');
});

app.use('/graphql', graphqlHTTP(()=> ({
	schema,
	graphiql: true,
	pretty: true
})));

app.listen(3000, () =>{
	console.log('Graphql API Running at port 3000');
});