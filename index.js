import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

//import schema from './graphql';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello world, this is graphql api.');
});

/*app.use('/graphql', graphqlHTTP(()=> ({
	schema,
	graphql: true,
	pretty: true
})));*/

app.listen(3000, () =>{
	console.log('Graphql API Running at port 3000');
});