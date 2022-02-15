import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesUpdateWithoutChallengesInput } from './categories-update-without-challenges.input';
import { CategoriesCreateWithoutChallengesInput } from './categories-create-without-challenges.input';

@InputType()
export class CategoriesUpsertWithoutChallengesInput {

    @Field(() => CategoriesUpdateWithoutChallengesInput, {nullable:false})
    update!: CategoriesUpdateWithoutChallengesInput;

    @Field(() => CategoriesCreateWithoutChallengesInput, {nullable:false})
    create!: CategoriesCreateWithoutChallengesInput;
}
