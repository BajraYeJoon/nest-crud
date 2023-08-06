import { Injectable } from '@nestjs/common';
import { Recipe } from './interfaces/recipe.interface';

@Injectable()
export class RecipesService {
  private readonly recipes: Recipe[] = [];

  create(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  findAll(): Recipe[] {
    return this.recipes;
  }
}
