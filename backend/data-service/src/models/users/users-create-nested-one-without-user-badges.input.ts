import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutUserBadgesInput } from './users-create-without-user-badges.input';
import { UsersCreateOrConnectWithoutUserBadgesInput } from './users-create-or-connect-without-user-badges.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutUserBadgesInput {

    @Field(() => UsersCreateWithoutUserBadgesInput, {nullable:true})
    create?: UsersCreateWithoutUserBadgesInput;

    @Field(() => UsersCreateOrConnectWithoutUserBadgesInput, {nullable:true})
    connectOrCreate?: UsersCreateOrConnectWithoutUserBadgesInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    connect?: UsersWhereUniqueInput;
}
