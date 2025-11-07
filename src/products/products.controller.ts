import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseArrayPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findByCategory(@Query('category') category: string) {
    return this.productsService.findProducts(category);
  }

  @Get('/bests')
  findBests() {
    return this.productsService.findBests();
  }

  @Get('/search')
  search(@Query('text') text: string) {
    return this.productsService.search(text);
  }

  @Get('/cart')
  findCartItems(@Query('ids') ids: string) {
    return this.productsService.findCartItems(ids);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
