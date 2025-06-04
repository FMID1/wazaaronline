import * as dotenv from 'dotenv';
dotenv.config();

console.log('✅ DATABASE_URL =', process.env.DATABASE_URL);


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
console.log('✅ DATABASE_URL =', process.env.DATABASE_URL);

  const app = await NestFactory.create(AppModule);
  await
app.enableCors();

 app.listen(process.env.PORT ?? 3000);
}
bootstrap();
