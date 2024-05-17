import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { inherits } from 'util';
import { privateDecrypt } from 'crypto';
import { User } from './schemas/users.schema';


export type ProductDTO = {
  id: string,
  productName: string,
  price: number,
  img: string
}

export type UserDTO = {
  id: string,
  userName: string,
  balance: number
}

@Injectable()
export class AppService {
  
  constructor(@InjectModel(Product.name) private productModel: Model<Product, @InjectModel(User.name) private userModel: Model<Product>) {}

  getProducts(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  insertProduct(productDTO: ProductDTO): Promise<Product> {
    const newProduct = new this.productModel(productDTO)
    return newProduct.save()
  }


  getUsers(): Promise<User[]> {
    return this.userModel.find().exec()
  }
}
