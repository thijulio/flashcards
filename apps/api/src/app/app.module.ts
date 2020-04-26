import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AuthModule } from './auth/auth.module';
import { AllExceptionsFilter } from './shared/errors/exception-filters/all-exception-filter';
import { UsersModule } from './users/users.module';
@Module({
    imports: [
        HttpModule,
        ConfigModule.forRoot({
            envFilePath: 'apps/api/.env',
            expandVariables: true,
        }),
        MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
        AuthModule,
        UsersModule,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
    ],
    controllers: [AccountController],
})
export class AppModule {}
