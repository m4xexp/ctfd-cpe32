import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgesWhereUniqueInput } from './badges-where-unique.input';
import { BadgesCreateWithoutUserBadgesInput } from './badges-create-without-user-badges.input';

@InputType()
export class BadgesCreateOrConnectWithoutUserBadgesInput {

    @Field(() => BadgesWhereUniqueInput, {nullable:false})
    where!: BadgesWhereUniqueInput;

    @Field(() => BadgesCreateWithoutUserBadgesInput, {nullable:false})
    create!: BadgesCreateWithoutUserBadgesInput;
}
