import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgesUpdateWithoutChallengesInput } from './badges-update-without-challenges.input';
import { BadgesCreateWithoutChallengesInput } from './badges-create-without-challenges.input';

@InputType()
export class BadgesUpsertWithoutChallengesInput {

    @Field(() => BadgesUpdateWithoutChallengesInput, {nullable:false})
    update!: BadgesUpdateWithoutChallengesInput;

    @Field(() => BadgesCreateWithoutChallengesInput, {nullable:false})
    create!: BadgesCreateWithoutChallengesInput;
}
