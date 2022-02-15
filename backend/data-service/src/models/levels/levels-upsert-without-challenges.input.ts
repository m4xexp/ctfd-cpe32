import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LevelsUpdateWithoutChallengesInput } from './levels-update-without-challenges.input';
import { LevelsCreateWithoutChallengesInput } from './levels-create-without-challenges.input';

@InputType()
export class LevelsUpsertWithoutChallengesInput {

    @Field(() => LevelsUpdateWithoutChallengesInput, {nullable:false})
    update!: LevelsUpdateWithoutChallengesInput;

    @Field(() => LevelsCreateWithoutChallengesInput, {nullable:false})
    create!: LevelsCreateWithoutChallengesInput;
}
