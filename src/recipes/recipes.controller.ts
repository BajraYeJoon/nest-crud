import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Header,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('recipes')
export class RecipesController {
  @Post()
  //custom header
  @Header('Cache-Control', 'none')
  //to change the status code
  @HttpCode(204)
  create(): string {
    return 'This action adds a new recipe';
  }

  //to fetch the receipes from the GET
  @Get() // Decorator
  findAll(@Req() request: Request): string {
    return 'This action returns all recipes';
  }

  //To fetch the single receipes from the GET
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} recipe`;
  }

  //wildcard route
  //  @Get('adb*adf')
  //   findAll2(): string {
  //     return 'This route uses a wildcard';
  //   }
}
