import { connect } from 'mongoose';

const dbConnect = (): Promise<void> => {
	return new Promise((resolve, reject) => {
		connect(process.env.MONGO_URI!).then(()=> {
            resolve();
        }).catch(()=>{
            reject();
        });
	});
};

export default dbConnect;