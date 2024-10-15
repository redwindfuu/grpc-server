import * as grpc from '@grpc/grpc-js';
import * as grpcLoader from '@grpc/proto-loader';
import path from 'path';



export const getProductService = () => {

  const PROTO_PATH = path.resolve(__dirname, './protos/product.proto');
  const packageDefinition = grpcLoader.loadSync(PROTO_PATH ,{
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
  });
  
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  
  const productService = new protoDescriptor.ProductService('localhost:6565', grpc.credentials.createInsecure());

  return productService;
}