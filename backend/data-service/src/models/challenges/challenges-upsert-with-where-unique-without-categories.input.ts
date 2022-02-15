import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesUpdateWithoutCategoriesInput } from './challenges-update-without-categories.input';
import { ChallengesCreateWithoutCategoriesInput } from './challenges-create-without-categories.input';

@InputType()
export class ChallengesUpsertWithWhereUniqueWithoutCategoriesInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesUpdateWithoutCategoriesInput, {nullable:false})
    update!: ChallengesUpdateWithoutCategoriesInput;

    @Field(() => ChallengesCreateWithoutCategoriesInput, {nullable:false})
    create!: ChallengesCreateWithoutCategoriesInput;
}
