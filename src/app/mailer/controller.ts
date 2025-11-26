import { Request, Response } from 'express';
import { mailer } from './model';
import { Options } from 'nodemailer/lib/mailer';
export const sendEmail = (req: Request, res: Response) => {
	const mailOptions: Options = {
		from: process.env.EMAIL_USER,
		to: req.query.email as string,
		subject: 'Tienes un nuevo correo',
		html: '<p>Hola, este es un correo de ejemplo</p>',
		text: 'Hola, ese es el texto plano',
	};

	mailer
		.sendMail(mailOptions)
		.then(() => {
			res.send('Correo enviado');
		})
		.catch((e) => {
			console.log(process.env.EMAIL_USER)
			console.log(req.query.email)
			console.log(e)
            res.send("Faltó especificar la cuenta. destino. Ejemplo ?email=tu_correo@gmail.com");
        });
};
