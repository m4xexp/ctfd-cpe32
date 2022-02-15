import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithoutChallengesInput } from './user-scores-update-without-challenges.input';

@InputType()
export class UserScoresUpdateWithWhereUniqueWithoutChallengesInput {

    @Field(() => UserScoresWhereUniqueInput, {nullable:false})
    where!: UserScoresWhereUniqueInput;

    @Field(() => UserScoresUpdateWithoutChallengesInput, {nullable:false})
    data!: UserScoresUpdateWithoutChallengesInput;
}
