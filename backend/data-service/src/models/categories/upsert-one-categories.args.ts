import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesWhereUniqueInput } from './categories-where-unique.input';
import { CategoriesCreateInput } from './categories-create.input';
import { CategoriesUpdateInput } from './categories-update.input';

@ArgsType()
export class UpsertOneCategoriesArgs {

    @Field(() => CategoriesWhereUniqueInput, {nullable:false})
    where!: CategoriesWhereUniqueInput;

    @Field(() => CategoriesCreateInput, {nullable:false})
    create!: CategoriesCreateInput;

    @Field(() => CategoriesUpdateInput, {nullable:false})
    update!: CategoriesUpdateInput;
}
