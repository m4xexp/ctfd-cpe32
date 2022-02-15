import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';
import { UserBadgesUpdateWithoutUsersInput } from './user-badges-update-without-users.input';
import { UserBadgesCreateWithoutUsersInput } from './user-badges-create-without-users.input';

@InputType()
export class UserBadgesUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => UserBadgesWhereUniqueInput, {nullable:false})
    where!: UserBadgesWhereUniqueInput;

    @Field(() => UserBadgesUpdateWithoutUsersInput, {nullable:false})
    update!: UserBadgesUpdateWithoutUsersInput;

    @Field(() => UserBadgesCreateWithoutUsersInput, {nullable:false})
    create!: UserBadgesCreateWithoutUsersInput;
}
