import { Global, Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

//to make the provider to be abvailable everywhere the common thing like db connect, helpers.use global
@Global()
@Module({
  controllers: [RecipesController],
  providers: [RecipesService],

  //to share the recipe module for another module first export it
  exports: [RecipesService],
})
export class RecipesModule {}
