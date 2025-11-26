import { Request, Response, NextFunction } from 'express';
import IUser from '../interfaces/user';

declare global {
    namespace Express{
        interface Request{
            user?: Express.User;
        }
    }
}
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.query;
    if(token === '12345'){
        if (req.user) {
            req.user = {
                id: 12,
                name: "Romo",
                email:"romo@ej.com"
            }
        }
        return next();
    }
    res.sendStatus(401);
};
