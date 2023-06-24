import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENVIROMENT } from 'configuration/server';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENVIROMENT.PORT, () => {
    console.log(`application started on port ${ENVIROMENT.PORT}`);
  });
}
bootstrap();
