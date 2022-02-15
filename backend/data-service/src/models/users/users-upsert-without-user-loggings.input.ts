import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutUserLoggingsInput } from './users-update-without-user-loggings.input';
import { UsersCreateWithoutUserLoggingsInput } from './users-create-without-user-loggings.input';

@InputType()
export class UsersUpsertWithoutUserLoggingsInput {

    @Field(() => UsersUpdateWithoutUserLoggingsInput, {nullable:false})
    update!: UsersUpdateWithoutUserLoggingsInput;

    @Field(() => UsersCreateWithoutUserLoggingsInput, {nullable:false})
    create!: UsersCreateWithoutUserLoggingsInput;
}
