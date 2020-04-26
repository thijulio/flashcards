import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchemaProvider } from './schemas/user.schema';
import { UsersService } from './users.service';

@Module({
    providers: [UsersService],
    imports: [MongooseModule.forFeatureAsync([UserSchemaProvider])],
    exports: [UsersService],
})
export class UsersModule {}
