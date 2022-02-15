import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutUserBadgesInput } from '../users/users-create-nested-one-without-user-badges.input';

@InputType()
export class UserBadgesCreateWithoutBadgesInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UsersCreateNestedOneWithoutUserBadgesInput, {nullable:false})
    users!: UsersCreateNestedOneWithoutUserBadgesInput;
}
