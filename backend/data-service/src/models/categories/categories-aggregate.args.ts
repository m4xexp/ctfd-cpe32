import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CategoriesWhereInput } from './categories-where.input'
import { CategoriesOrderByWithRelationInput } from './categories-order-by-with-relation.input'
import { CategoriesWhereUniqueInput } from './categories-where-unique.input'
import { Int } from '@nestjs/graphql'
import { CategoriesCountAggregateInput } from './categories-count-aggregate.input'
import { CategoriesMinAggregateInput } from './categories-min-aggregate.input'
import { CategoriesMaxAggregateInput } from './categories-max-aggregate.input'

@ArgsType()
export class CategoriesAggregateArgs {
  @Field(() => CategoriesWhereInput, { nullable: true })
  where?: CategoriesWhereInput

  @Field(() => [CategoriesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CategoriesOrderByWithRelationInput>

  @Field(() => CategoriesWhereUniqueInput, { nullable: true })
  cursor?: CategoriesWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => CategoriesCountAggregateInput, { nullable: true })
  _count?: CategoriesCountAggregateInput

  @Field(() => CategoriesMinAggregateInput, { nullable: true })
  _min?: CategoriesMinAggregateInput

  @Field(() => CategoriesMaxAggregateInput, { nullable: true })
  _max?: CategoriesMaxAggregateInput
}
