import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import path from 'path';

@Module({
  imports: [RecipesModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'recipes', method: RequestMethod.GET });
  }
}
