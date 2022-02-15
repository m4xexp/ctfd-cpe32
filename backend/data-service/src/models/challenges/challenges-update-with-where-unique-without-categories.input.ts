import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesUpdateWithoutCategoriesInput } from './challenges-update-without-categories.input';

@InputType()
export class ChallengesUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesUpdateWithoutCategoriesInput, {nullable:false})
    data!: ChallengesUpdateWithoutCategoriesInput;
}
