import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { inherits } from 'util';
import { privateDecrypt } from 'crypto';
import { User } from './schemas/users.schema';
import { ObjectId } from 'mongoose';


export type ProductDTO = {
  id: string,
  productName: string,
  price: number,
  img: string
}

export type UserDTO = {
  id: string,
  userName: string,
  cart: string[],
  balance: number
}

export type BalanceDTO = {
  newBalance: number
}

@Injectable()
export class AppService {
  
  constructor(@InjectModel(Product.name) private productModel: Model<Product>, @InjectModel(User.name) private userModel: Model<User>) {}

  dbGetProducts(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  dbInsertProduct(productDTO: ProductDTO): Promise<Product> {
    const newProduct = new this.productModel(productDTO)
    return newProduct.save()
  }


  dbGetUsers(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  dbSetBalance(id:string, balanceInfo :BalanceDTO): Promise<object>{
    console.log(id)
    console.log(balanceInfo.newBalance)
    return this.userModel.updateOne(
      {id:id},
      {balance:balanceInfo.newBalance}
    )
  }
}
