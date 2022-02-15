import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgesWhereUniqueInput } from './badges-where-unique.input';
import { BadgesCreateWithoutChallengesInput } from './badges-create-without-challenges.input';

@InputType()
export class BadgesCreateOrConnectWithoutChallengesInput {

    @Field(() => BadgesWhereUniqueInput, {nullable:false})
    where!: BadgesWhereUniqueInput;

    @Field(() => BadgesCreateWithoutChallengesInput, {nullable:false})
    create!: BadgesCreateWithoutChallengesInput;
}
