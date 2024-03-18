import { ProductDto } from './dtos/product.dto';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {
   constructor(private productsService: ProductsService) { }
   @Get('list')
   findAllProducts() {
      return this.productsService.findAll()
   }
   @Post('create')
   async create(@Body() data: ProductDto) {
      return this.productsService.create(data)
   }
   @Put(':id')
   async update(@Param("id") id: string, @Body() data: ProductDto) {
      return this.productsService.update(id, data)
   }
   @Delete(':id')
   async delete(@Param("id") id: string) {
      return this.productsService.delete(id)
   }
}