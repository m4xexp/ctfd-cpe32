import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { TutorialChapterDatasListRelationFilter } from '../tutorial-chapter-datas/tutorial-chapter-datas-list-relation-filter.input'

@InputType()
export class TutorialContentsWhereInput {
  @Field(() => [TutorialContentsWhereInput], { nullable: true })
  AND?: Array<TutorialContentsWhereInput>

  @Field(() => [TutorialContentsWhereInput], { nullable: true })
  OR?: Array<TutorialContentsWhereInput>

  @Field(() => [TutorialContentsWhereInput], { nullable: true })
  NOT?: Array<TutorialContentsWhereInput>

  @Field(() => StringFilter, { nullable: true })
  tutorial_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => TutorialChapterDatasListRelationFilter, { nullable: true })
  tutorialChapterDatas?: TutorialChapterDatasListRelationFilter
}
