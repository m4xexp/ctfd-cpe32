import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutUserBadgesInput } from './users-create-without-user-badges.input';
import { UsersCreateOrConnectWithoutUserBadgesInput } from './users-create-or-connect-without-user-badges.input';
import { UsersUpsertWithoutUserBadgesInput } from './users-upsert-without-user-badges.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutUserBadgesInput } from './users-update-without-user-badges.input';

@InputType()
export class UsersUpdateOneRequiredWithoutUserBadgesInput {

    @Field(() => UsersCreateWithoutUserBadgesInput, {nullable:true})
    create?: UsersCreateWithoutUserBadgesInput;

    @Field(() => UsersCreateOrConnectWithoutUserBadgesInput, {nullable:true})
    connectOrCreate?: UsersCreateOrConnectWithoutUserBadgesInput;

    @Field(() => UsersUpsertWithoutUserBadgesInput, {nullable:true})
    upsert?: UsersUpsertWithoutUserBadgesInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    connect?: UsersWhereUniqueInput;

    @Field(() => UsersUpdateWithoutUserBadgesInput, {nullable:true})
    update?: UsersUpdateWithoutUserBadgesInput;
}
