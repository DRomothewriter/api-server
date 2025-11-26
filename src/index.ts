import dotenv from 'dotenv';
dotenv.config();
import dbConnect from './database';
import express, { static as static_ } from 'express';
import path from 'path';
//import database from './../database.json';
//import { setApp } from 'app/auth/model';
import routes from './app/routes';
// import { ejemplo } from './app/ejemplo';
import { engine } from 'express-handlebars';
import swaggerJsDoc from 'swagger-jsdoc';
import { setup, serve } from 'swagger-ui-express';
import swaggerOptions from './../swagger.config';
import { Server } from 'socket.io';
import http from 'http';
//console.log(database.nombre);
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('/static', static_(path.join(__dirname, '..', 'public')));

app.use(routes);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views', 'index.html'));
	res.render('index', { nombre: 'Romo' });
});
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', serve, setup(swaggerDocs));

// dbConnect()
// 	.then(() => {
// 		app.listen(port, () => {
// 			console.log(`http://localhost:${port}`);
// 		});
// 	})
// 	.catch(() => console.log('Failed database connection'));


const server: http.Server = app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

const io = new Server(server,{
	cors: {
		origin: ['http://localhost:3000']
	}
});

io.on('connection', (socket) => {
	socket.emit('confirmacion');
	console.log("Nuevo cliente conectado:", socket.id);

	socket.on('disconnect', () => {
		console.log("Cliente desconectado:", socket.id);
	})

	socket.on('sendMessage', (data) => {
		io.emit('receiveMessage', {message: data.message})
	});
})