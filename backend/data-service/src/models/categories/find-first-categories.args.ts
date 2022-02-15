import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesWhereInput } from './categories-where.input';
import { CategoriesOrderByWithRelationInput } from './categories-order-by-with-relation.input';
import { CategoriesWhereUniqueInput } from './categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CategoriesScalarFieldEnum } from './categories-scalar-field.enum';

@ArgsType()
export class FindFirstCategoriesArgs {

    @Field(() => CategoriesWhereInput, {nullable:true})
    where?: CategoriesWhereInput;

    @Field(() => [CategoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoriesOrderByWithRelationInput>;

    @Field(() => CategoriesWhereUniqueInput, {nullable:true})
    cursor?: CategoriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CategoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoriesScalarFieldEnum>;
}
