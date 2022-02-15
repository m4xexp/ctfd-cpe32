import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateNestedManyWithoutCategoriesInput } from '../user-scores/user-scores-create-nested-many-without-categories.input';

@InputType()
export class CategoriesCreateWithoutChallengesInput {

    @Field(() => String, {nullable:true})
    categories_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserScoresCreateNestedManyWithoutCategoriesInput, {nullable:true})
    userScores?: UserScoresCreateNestedManyWithoutCategoriesInput;
}
