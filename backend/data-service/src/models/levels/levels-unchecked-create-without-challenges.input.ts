import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresUncheckedCreateNestedManyWithoutLevelsInput } from '../user-scores/user-scores-unchecked-create-nested-many-without-levels.input';

@InputType()
export class LevelsUncheckedCreateWithoutChallengesInput {

    @Field(() => String, {nullable:true})
    level_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserScoresUncheckedCreateNestedManyWithoutLevelsInput, {nullable:true})
    userScores?: UserScoresUncheckedCreateNestedManyWithoutLevelsInput;
}
