import {
  Controller,
  Get,
  Post,
  Body,
  // Param,
  // Delete,
  // Put,
  // Query,
  // Controller,
} from '@nestjs/common';
import {
  CreateRecipeDto,
  // UpdateRecipeDto,
  // ListAllEntities,
} from './dto/create-recipe.dto';
import { RecipesService } from './recipes.service';
import { Recipe } from './interfaces/recipe.interface';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesServices: RecipesService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    this.recipesServices.create(createRecipeDto);
  }

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipesServices.findAll();
  }
}

// Basic REST functionality

// @Controller('recipes')
// export class RecipesController {
//   @Post()
//   create(@Body() createRecipeDto: CreateRecipeDto) {
//     return createRecipeDto;
//   }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all recipes (limit: ${query.limit} items)`;
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} recipe`;
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
//     return `This action updates a #${id} recipe`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} recipe`;
//   }

//   @Get('aa')
//   sdfg(@Query() query: ListAllEntities) {
//     return `This action returns all recipes (limit: ${query.limit} items)`;
//   }
// }

// import {
//   Controller,
//   Get,
//   Post,
//   Req,
//   HttpCode,
//   Header,
//   Param,
//   Body,
// } from '@nestjs/common';
// import { CreateRecipeDto } from './dto/create-recipe.dto';
// import { Request } from 'express';
// import { create } from 'domain';

// @Controller('recipes')
// export class RecipesController {
// //   @Post()
// //   //custom header
// //   @Header('Cache-Control', 'none')
// //   //to change the status code
// //   @HttpCode(204)
// //   create(): string {
// //     return 'This action adds a new recipe';
//   }

//   //to fetch the receipes from the dto
//   @Post()
//   async create(@Body() createRecipeDto: CreateRecipeDto){
//     return `This action adds a new recipe ${createRecipeDto.name}`;
//   }

//   //to fetch the receipes from the GET
//   @Get() // Decorator
//   findAll(@Req() request: Request): string {
//     return 'This action returns all recipes';
//   }

//   //For async
//   //   @Get()
//   //   async findAllAsync(): Promise<any[]> {
//   //     return [];
//   //   }

//   //To fetch the single receipes from the GET
//   @Get(':id')
//   findOne(@Param() params: any): string {
//     console.log(params.id);
//     return `This action returns a #${params.id} recipe`;
//   }

//   //wildcard route
//   //  @Get('adb*adf')
//   //   findAll2(): string {
//   //     return 'This route uses a wildcard';
//   //   }
// }
