import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService, ProductDTO, UserDTO } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("products")
  async getHello(): Promise<ProductDTO[]> {
    return await this.appService.getProducts();
  }

  @Post("product")
  async postProduct(@Body() productDTO: ProductDTO): Promise<string> {
    const insertedProduct = await this.appService.insertProduct(productDTO)
    return JSON.stringify(insertedProduct)
  }

  @Get("users")
  async getUsersData(): Promise<UserDTO[]> {
    return await []
  }
}
