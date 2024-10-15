import express from 'express';
import cors from 'cors';
import { getGrpcServer } from './grpc/grpc-server';
import * as grpc from '@grpc/grpc-js';
import router from './routes';


const app = express();


app.use(express.json());
app.use(cors());


app.use(router)





app.listen(3000 , () => {
   const server = getGrpcServer();
    server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`gRPC Server is running on port ${port}`);
        // server.start();
      });
})
