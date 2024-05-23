import { Controller, Get, Post, Body, Patch, Put, Param } from '@nestjs/common';
import { AppService, BalanceDTO, ProductDTO, UserDTO } from './app.service';
import { User } from './schemas/users.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("products")
  async getHello(): Promise<ProductDTO[]> {
    return await this.appService.dbGetProducts();
  }

  @Post("product")
  async postProduct(@Body() productDTO: ProductDTO): Promise<string> {
    const insertedProduct = await this.appService.dbInsertProduct(productDTO)
    return JSON.stringify(insertedProduct)
  }

  @Get("users")
  async getUsersData(): Promise<UserDTO[]> {
    return await this.appService.dbGetUsers();
  }

  @Put("set-balance/:id")
  async setBalance(@Body() balanceInfo: BalanceDTO, @Param("id") id: string): Promise<object>{
    const updatedBalance = await this.appService.dbSetBalance(id, balanceInfo)
    return updatedBalance
  }
}
