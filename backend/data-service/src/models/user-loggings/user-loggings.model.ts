import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Users } from '../users/users.model';

@ObjectType()
export class UserLoggings {

    @Field(() => ID, {nullable:false})
    log_id!: string;

    @Field(() => Users, {nullable:false})
    users?: Users;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
