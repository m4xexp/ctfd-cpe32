import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class TutorialChapterDatasCountAggregate {
  @Field(() => Int, { nullable: false })
  chapter_id!: number

  @Field(() => Int, { nullable: false })
  tutorial_id!: number

  @Field(() => Int, { nullable: false })
  chapter_name!: number

  @Field(() => Int, { nullable: false })
  video_link!: number

  @Field(() => Int, { nullable: false })
  flag_link!: number

  @Field(() => Int, { nullable: false })
  description!: number

  @Field(() => Int, { nullable: false })
  question!: number

  @Field(() => Int, { nullable: false })
  answer!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
