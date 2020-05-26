import { ApiSharedAuthModule } from '@flashcards/api/shared/auth';
import { AllExceptionsFilter } from '@flashcards/api/shared/errors';
import { ApiSharedUsersModule, UserService } from '@flashcards/api/shared/users';
import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';

@Module({
    imports: [
        HttpModule,
        ConfigModule.forRoot({
            expandVariables: true,
        }),
        MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        ApiSharedAuthModule,
        ApiSharedUsersModule,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
        UserService,
    ],
    controllers: [AccountController],
})
export class AppModule {}
