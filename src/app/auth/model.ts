let globalApp: any;
export function setApp(app:any){
    globalApp = app;
}

export function getApp(){
    return globalApp
}