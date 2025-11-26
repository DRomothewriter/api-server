import { Request, Response } from "express";

export function login(req:Request, res: Response){
    console.log("Login:",req.body);
    res.send({token: "0987654321"});
};

export const signup = (req: Request, res: Response) => {
    console.log("Signup body:",req.body);
    res.send();
};

export const getLogin = (req: Request, res: Response) => {
    res.render('login')
};

export const getLogout = (req: Request, res: Response) => {
    res.clearCookie('');
    res.redirect('/');
};

export const getLoginGoogle = (req: Request, res: Response) => {

}