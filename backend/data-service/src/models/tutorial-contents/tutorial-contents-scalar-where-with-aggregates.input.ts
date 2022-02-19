import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class TutorialContentsScalarWhereWithAggregatesInput {
  @Field(() => [TutorialContentsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<TutorialContentsScalarWhereWithAggregatesInput>

  @Field(() => [TutorialContentsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<TutorialContentsScalarWhereWithAggregatesInput>

  @Field(() => [TutorialContentsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<TutorialContentsScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tutorial_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
