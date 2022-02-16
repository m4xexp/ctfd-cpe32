import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ChallengesCount {
  @Field(() => Int, { nullable: false })
  userScores!: number

  @Field(() => Int, { nullable: false })
  multipleQuestions!: number

  @Field(() => Int, { nullable: false })
  shortAnswerQuestions!: number

  @Field(() => Int, { nullable: false })
  flagQuestions!: number
}
