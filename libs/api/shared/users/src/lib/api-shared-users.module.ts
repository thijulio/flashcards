import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchemaProvider } from './schemas/user.schema';
import { UserService } from './services/user.service';

@Module({
    providers: [UserService],
    imports: [MongooseModule.forFeatureAsync([UserSchemaProvider])],
    exports: [UserService, MongooseModule],
})
export class ApiSharedUsersModule {}
