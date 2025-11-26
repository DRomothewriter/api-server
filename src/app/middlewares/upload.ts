import multer, { diskStorage, FileFilterCallback } from 'multer';
import { Request } from 'express';
import path from 'path';
const validExtensions = {
	documents: ['docs', 'pdf'],
};

const multerStorage = diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		const nombre = new Date().getTime().toString();
		const extension = path.extname(file.originalname);
		cb(null, `${nombre}${extension}`);
	},
});

const filters = (
	req: Request,
	file: Express.Multer.File,
	cb: FileFilterCallback
) => {
	/**
	 * const validExtensions = ['jpg','png'];
	 * const extension = path.extname(file.originalname);
	 * const acceptedFile = validExtentions.includes(extension);
	 */
	//const acceptedFile = file.mimetype.split('/')[0] === 'image';
	let accept = false;
	if (file.fieldname === 'image') {
		accept = file.mimetype.startsWith(`image/`);
	} else if (file.fieldname === 'documents') {
		const extension = path.extname(file.originalname);
		accept = validExtensions['documents'].includes(extension);
	}

	cb(null, accept);
};

export const upload = multer({
	storage: multerStorage,

});
