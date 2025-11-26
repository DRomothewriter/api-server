import { SwaggerOptions } from 'swagger-ui-express';
const options: SwaggerOptions = {
	swaggerDefinition: {
		onpeapi: '3.1.0',

		info: {
			title: 'API Dummy',
			description: 'API para TdS',
			version: '0.0.1',
		},
		servers: [
			{ url: 'http://localhost:' + process.env.PORT + '/' }
		]
	},
	apis: ['./src/**/*.ts'],
};
export default options;
