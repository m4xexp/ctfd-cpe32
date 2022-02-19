import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class FlagQuestionsCreateManyChallengesInput {
  @Field(() => String, { nullable: true })
  flag_question_id?: string

  @Field(() => String, { nullable: true })
  video_link?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => String, { nullable: true })
  question?: string

  @Field(() => String, { nullable: true })
  answer?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
