import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';
import { UserBadgesUpdateWithoutBadgesInput } from './user-badges-update-without-badges.input';
import { UserBadgesCreateWithoutBadgesInput } from './user-badges-create-without-badges.input';

@InputType()
export class UserBadgesUpsertWithWhereUniqueWithoutBadgesInput {

    @Field(() => UserBadgesWhereUniqueInput, {nullable:false})
    where!: UserBadgesWhereUniqueInput;

    @Field(() => UserBadgesUpdateWithoutBadgesInput, {nullable:false})
    update!: UserBadgesUpdateWithoutBadgesInput;

    @Field(() => UserBadgesCreateWithoutBadgesInput, {nullable:false})
    create!: UserBadgesCreateWithoutBadgesInput;
}
