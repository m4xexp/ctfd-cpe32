import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@InputType()
export class UserScoresUncheckedCreateWithoutLevelsInput {
  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => String, { nullable: false })
  challenge_id!: string

  @Field(() => Int, { nullable: true })
  base_score?: number

  @Field(() => Float, { nullable: true })
  time_score?: number

  @Field(() => String, { nullable: false })
  types_id!: string

  @Field(() => String, { nullable: false })
  categories_id!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
