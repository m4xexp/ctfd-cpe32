import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateNestedManyWithoutLevelsInput } from '../user-scores/user-scores-create-nested-many-without-levels.input';
import { ChallengesCreateNestedManyWithoutLevelsInput } from '../challenges/challenges-create-nested-many-without-levels.input';

@InputType()
export class LevelsCreateInput {

    @Field(() => String, {nullable:true})
    level_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserScoresCreateNestedManyWithoutLevelsInput, {nullable:true})
    userScores?: UserScoresCreateNestedManyWithoutLevelsInput;

    @Field(() => ChallengesCreateNestedManyWithoutLevelsInput, {nullable:true})
    challenges?: ChallengesCreateNestedManyWithoutLevelsInput;
}
