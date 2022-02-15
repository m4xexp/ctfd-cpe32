import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsCreateWithoutUsersInput } from './user-tutorials-create-without-users.input';
import { UserTutorialsCreateOrConnectWithoutUsersInput } from './user-tutorials-create-or-connect-without-users.input';
import { UserTutorialsUpsertWithWhereUniqueWithoutUsersInput } from './user-tutorials-upsert-with-where-unique-without-users.input';
import { UserTutorialsCreateManyUsersInputEnvelope } from './user-tutorials-create-many-users-input-envelope.input';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { UserTutorialsUpdateWithWhereUniqueWithoutUsersInput } from './user-tutorials-update-with-where-unique-without-users.input';
import { UserTutorialsUpdateManyWithWhereWithoutUsersInput } from './user-tutorials-update-many-with-where-without-users.input';
import { UserTutorialsScalarWhereInput } from './user-tutorials-scalar-where.input';

@InputType()
export class UserTutorialsUncheckedUpdateManyWithoutUsersInput {

    @Field(() => [UserTutorialsCreateWithoutUsersInput], {nullable:true})
    create?: Array<UserTutorialsCreateWithoutUsersInput>;

    @Field(() => [UserTutorialsCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<UserTutorialsCreateOrConnectWithoutUsersInput>;

    @Field(() => [UserTutorialsUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    upsert?: Array<UserTutorialsUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => UserTutorialsCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: UserTutorialsCreateManyUsersInputEnvelope;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    set?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    delete?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    connect?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    update?: Array<UserTutorialsUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [UserTutorialsUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    updateMany?: Array<UserTutorialsUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [UserTutorialsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserTutorialsScalarWhereInput>;
}
