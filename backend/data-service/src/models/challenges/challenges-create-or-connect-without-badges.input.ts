import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesCreateWithoutBadgesInput } from './challenges-create-without-badges.input';

@InputType()
export class ChallengesCreateOrConnectWithoutBadgesInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesCreateWithoutBadgesInput, {nullable:false})
    create!: ChallengesCreateWithoutBadgesInput;
}
