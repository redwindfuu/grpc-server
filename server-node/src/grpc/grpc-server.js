import * as grpc from '@grpc/grpc-js';
import {
  userProtoService,
  methodServiceMap,
} from './services/user-proto-service';

const addService = (server) => {

  server.addService(userProtoService.service, methodServiceMap);

}


export const getGrpcServer = () => {
  const server = new grpc.Server();
  addService(server);
  return server;
}