import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class CategoriesScalarWhereWithAggregatesInput {
  @Field(() => [CategoriesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CategoriesScalarWhereWithAggregatesInput>

  @Field(() => [CategoriesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CategoriesScalarWhereWithAggregatesInput>

  @Field(() => [CategoriesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CategoriesScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  categories_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
