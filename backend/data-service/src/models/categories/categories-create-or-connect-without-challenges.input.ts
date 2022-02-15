import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesWhereUniqueInput } from './categories-where-unique.input';
import { CategoriesCreateWithoutChallengesInput } from './categories-create-without-challenges.input';

@InputType()
export class CategoriesCreateOrConnectWithoutChallengesInput {

    @Field(() => CategoriesWhereUniqueInput, {nullable:false})
    where!: CategoriesWhereUniqueInput;

    @Field(() => CategoriesCreateWithoutChallengesInput, {nullable:false})
    create!: CategoriesCreateWithoutChallengesInput;
}
