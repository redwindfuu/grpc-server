import * as grpcLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import path from 'path';

const PROTO_PATH = path.resolve(__dirname, '../protos/user.proto');

const USERS = [
  {
    id: 1,
    name: 'John Doe',
    email: 'JohnDoe@gmail.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'JaneDoe;@gmail.com',
  },
  {
    id: 3,
    name: 'Alice',
    email: 'Alice@gmail.com',
  },
  {
    id: 4,
    name: 'Bob',
    email: 'Bob@gmail.com',
  },
]

console.log(PROTO_PATH);

const packageDefinition = grpcLoader.loadSync(PROTO_PATH ,{
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const userProtoService = protoDescriptor.UserService;

const getUser = (call, callback) => {
  const { id } = call.request;
  const user = USERS.find(user => user.id === +id);
  if (user) {
    callback(null, user);
  } else {
    callback({
      code: grpc.status.NOT_FOUND,
      details: 'Not found',
    });
  }
}

const getUsers = (call, callback) => {
  callback(null, { users: USERS });
}

const methodServiceMap = {
  GetUser : getUser,
  GetAllUsers : getUsers,
}

export {
  userProtoService,
  methodServiceMap, 
}
