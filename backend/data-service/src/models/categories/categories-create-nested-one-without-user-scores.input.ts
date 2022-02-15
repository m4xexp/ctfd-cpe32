import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoriesCreateWithoutUserScoresInput } from './categories-create-without-user-scores.input';
import { CategoriesCreateOrConnectWithoutUserScoresInput } from './categories-create-or-connect-without-user-scores.input';
import { CategoriesWhereUniqueInput } from './categories-where-unique.input';

@InputType()
export class CategoriesCreateNestedOneWithoutUserScoresInput {

    @Field(() => CategoriesCreateWithoutUserScoresInput, {nullable:true})
    create?: CategoriesCreateWithoutUserScoresInput;

    @Field(() => CategoriesCreateOrConnectWithoutUserScoresInput, {nullable:true})
    connectOrCreate?: CategoriesCreateOrConnectWithoutUserScoresInput;

    @Field(() => CategoriesWhereUniqueInput, {nullable:true})
    connect?: CategoriesWhereUniqueInput;
}
