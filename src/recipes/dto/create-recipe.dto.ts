export class CreateRecipeDto {
  name: string;
  ingredients: string;
  steps: string;
  duration: number;
  difficulty: string;
  description: string;
}

export class UpdateRecipeDto {
  name: string;
  ingredients: string;
  steps: string;
  duration: number;
  difficulty: string;
  description: string;
}

export class ListAllEntities {
  limit: number;
  page: number;
}
