import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLoggingsCreateWithoutUsersInput } from './user-loggings-create-without-users.input';
import { UserLoggingsCreateOrConnectWithoutUsersInput } from './user-loggings-create-or-connect-without-users.input';
import { UserLoggingsUpsertWithWhereUniqueWithoutUsersInput } from './user-loggings-upsert-with-where-unique-without-users.input';
import { UserLoggingsCreateManyUsersInputEnvelope } from './user-loggings-create-many-users-input-envelope.input';
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input';
import { UserLoggingsUpdateWithWhereUniqueWithoutUsersInput } from './user-loggings-update-with-where-unique-without-users.input';
import { UserLoggingsUpdateManyWithWhereWithoutUsersInput } from './user-loggings-update-many-with-where-without-users.input';
import { UserLoggingsScalarWhereInput } from './user-loggings-scalar-where.input';

@InputType()
export class UserLoggingsUncheckedUpdateManyWithoutUsersInput {

    @Field(() => [UserLoggingsCreateWithoutUsersInput], {nullable:true})
    create?: Array<UserLoggingsCreateWithoutUsersInput>;

    @Field(() => [UserLoggingsCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<UserLoggingsCreateOrConnectWithoutUsersInput>;

    @Field(() => [UserLoggingsUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    upsert?: Array<UserLoggingsUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => UserLoggingsCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: UserLoggingsCreateManyUsersInputEnvelope;

    @Field(() => [UserLoggingsWhereUniqueInput], {nullable:true})
    set?: Array<UserLoggingsWhereUniqueInput>;

    @Field(() => [UserLoggingsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserLoggingsWhereUniqueInput>;

    @Field(() => [UserLoggingsWhereUniqueInput], {nullable:true})
    delete?: Array<UserLoggingsWhereUniqueInput>;

    @Field(() => [UserLoggingsWhereUniqueInput], {nullable:true})
    connect?: Array<UserLoggingsWhereUniqueInput>;

    @Field(() => [UserLoggingsUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    update?: Array<UserLoggingsUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [UserLoggingsUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    updateMany?: Array<UserLoggingsUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [UserLoggingsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserLoggingsScalarWhereInput>;
}
