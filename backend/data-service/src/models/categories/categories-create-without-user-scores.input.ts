import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateNestedManyWithoutCategoriesInput } from '../challenges/challenges-create-nested-many-without-categories.input';

@InputType()
export class CategoriesCreateWithoutUserScoresInput {

    @Field(() => String, {nullable:true})
    categories_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChallengesCreateNestedManyWithoutCategoriesInput, {nullable:true})
    challenges?: ChallengesCreateNestedManyWithoutCategoriesInput;
}
