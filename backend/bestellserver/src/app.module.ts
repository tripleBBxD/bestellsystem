import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017"), MongooseModule.forFeature([{name:Product.name, schema: ProductSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
