import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input';
import { UserLoggingsUpdateWithoutUsersInput } from './user-loggings-update-without-users.input';

@InputType()
export class UserLoggingsUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => UserLoggingsWhereUniqueInput, {nullable:false})
    where!: UserLoggingsWhereUniqueInput;

    @Field(() => UserLoggingsUpdateWithoutUsersInput, {nullable:false})
    data!: UserLoggingsUpdateWithoutUsersInput;
}
