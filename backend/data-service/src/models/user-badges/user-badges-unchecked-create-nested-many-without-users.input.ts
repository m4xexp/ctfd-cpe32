import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesCreateWithoutUsersInput } from './user-badges-create-without-users.input';
import { UserBadgesCreateOrConnectWithoutUsersInput } from './user-badges-create-or-connect-without-users.input';
import { UserBadgesCreateManyUsersInputEnvelope } from './user-badges-create-many-users-input-envelope.input';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';

@InputType()
export class UserBadgesUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [UserBadgesCreateWithoutUsersInput], {nullable:true})
    create?: Array<UserBadgesCreateWithoutUsersInput>;

    @Field(() => [UserBadgesCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<UserBadgesCreateOrConnectWithoutUsersInput>;

    @Field(() => UserBadgesCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: UserBadgesCreateManyUsersInputEnvelope;

    @Field(() => [UserBadgesWhereUniqueInput], {nullable:true})
    connect?: Array<UserBadgesWhereUniqueInput>;
}
