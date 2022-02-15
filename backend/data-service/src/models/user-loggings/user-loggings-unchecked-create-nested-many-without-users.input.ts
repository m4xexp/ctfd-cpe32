import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLoggingsCreateWithoutUsersInput } from './user-loggings-create-without-users.input';
import { UserLoggingsCreateOrConnectWithoutUsersInput } from './user-loggings-create-or-connect-without-users.input';
import { UserLoggingsCreateManyUsersInputEnvelope } from './user-loggings-create-many-users-input-envelope.input';
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input';

@InputType()
export class UserLoggingsUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [UserLoggingsCreateWithoutUsersInput], {nullable:true})
    create?: Array<UserLoggingsCreateWithoutUsersInput>;

    @Field(() => [UserLoggingsCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<UserLoggingsCreateOrConnectWithoutUsersInput>;

    @Field(() => UserLoggingsCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: UserLoggingsCreateManyUsersInputEnvelope;

    @Field(() => [UserLoggingsWhereUniqueInput], {nullable:true})
    connect?: Array<UserLoggingsWhereUniqueInput>;
}
