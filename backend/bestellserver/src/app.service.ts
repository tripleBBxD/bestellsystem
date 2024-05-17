import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';


export type ProductDTO = {
  id: string,
  productName: string,
  price: number,
  img: string
}

@Injectable()
export class AppService {
  
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  getProducts(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  insertProduct(productDTO: ProductDTO): Promise<Product> {
    const newProduct = new this.productModel(productDTO)
    return newProduct.save()
  }
}
