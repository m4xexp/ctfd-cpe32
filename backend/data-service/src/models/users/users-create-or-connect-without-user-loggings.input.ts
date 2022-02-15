import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersCreateWithoutUserLoggingsInput } from './users-create-without-user-loggings.input';

@InputType()
export class UsersCreateOrConnectWithoutUserLoggingsInput {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    where!: UsersWhereUniqueInput;

    @Field(() => UsersCreateWithoutUserLoggingsInput, {nullable:false})
    create!: UsersCreateWithoutUserLoggingsInput;
}
