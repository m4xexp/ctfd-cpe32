import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesUpdateWithoutLevelsInput } from './challenges-update-without-levels.input';

@InputType()
export class ChallengesUpdateWithWhereUniqueWithoutLevelsInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesUpdateWithoutLevelsInput, {nullable:false})
    data!: ChallengesUpdateWithoutLevelsInput;
}
