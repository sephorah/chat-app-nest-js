import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import path from 'path';

const getEnv = (): string => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return path.resolve(__dirname, '../.env.test');
    case 'development':
      return path.resolve(__dirname, '../.env');
    case 'production':
      return path.resolve(__dirname, '../.env.prod');
  }
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnv(),
    }),
    UsersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
