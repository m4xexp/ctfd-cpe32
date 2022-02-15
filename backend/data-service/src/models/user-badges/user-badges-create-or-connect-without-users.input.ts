import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';
import { UserBadgesCreateWithoutUsersInput } from './user-badges-create-without-users.input';

@InputType()
export class UserBadgesCreateOrConnectWithoutUsersInput {

    @Field(() => UserBadgesWhereUniqueInput, {nullable:false})
    where!: UserBadgesWhereUniqueInput;

    @Field(() => UserBadgesCreateWithoutUsersInput, {nullable:false})
    create!: UserBadgesCreateWithoutUsersInput;
}
