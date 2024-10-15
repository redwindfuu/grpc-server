package com.zhenfeng.springserver.service;

import com.zhenfeng.springserver.service.proto.*;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;

@GrpcService
public class ProductProtoServiceImpl extends ProductServiceGrpc.ProductServiceImplBase {

    @Override
    public void getProduct(GetProductRequest request, StreamObserver<Product> responseObserver) {
        Product product = Product.newBuilder()
                .setId(request.getId())
                .setName("Product Name")
                .setDescription("Product Description")
                .setPrice(100.0F)
                .build();
        responseObserver.onNext(product);
        responseObserver.onCompleted();
    }

    @Override
    public void getAllProducts(Empty request, StreamObserver<Products> responseObserver) {
        Product product1 = Product.newBuilder()
                .setId("1")
                .setName("Product 1")
                .setDescription("Product 1 Description")
                .setPrice(100.0F)
                .build();
        Product product2 = Product.newBuilder()
                .setId("2")
                .setName("Product 2")
                .setDescription("Product 2 Description")
                .setPrice(200.0F)
                .build();
        Products products = Products.newBuilder()
                .addProducts(product1)
                .addProducts(product2)
                .build();
        responseObserver.onNext(products);
        responseObserver.onCompleted();
    }
}