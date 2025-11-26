import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    try{
        const {user, password} = req.body;
        if (user === "Diego" && password === "password"){
            return res.status(200).json({token: "12345"})
        }else {
            return res.status(401).json({message: "Wrong credentials"})
        }
    }
    catch(e){
        console.log(e)
    }
}

export const getUsers = (req: Request, res: Response) => {
    res.send(["Romo"]);
}

export const uploadPic = (req: Request, res: Response) => {
    res.send('Ok')
}
export const uploadDoc = (req: Request, res: Response) => {
    res.send('Ok')
}
export const showUploadForm = (req: Request, res: Response) => { 
    res.render('upload')
}