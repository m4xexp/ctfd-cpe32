import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithoutCategoriesInput } from './user-scores-update-without-categories.input';

@InputType()
export class UserScoresUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => UserScoresWhereUniqueInput, {nullable:false})
    where!: UserScoresWhereUniqueInput;

    @Field(() => UserScoresUpdateWithoutCategoriesInput, {nullable:false})
    data!: UserScoresUpdateWithoutCategoriesInput;
}
