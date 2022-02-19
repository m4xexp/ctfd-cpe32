import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateNestedManyWithoutLevelsInput } from '../challenges/challenges-create-nested-many-without-levels.input'

@InputType()
export class LevelsCreateWithoutUserScoresInput {
  @Field(() => String, { nullable: true })
  level_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => ChallengesCreateNestedManyWithoutLevelsInput, { nullable: true })
  challenges?: ChallengesCreateNestedManyWithoutLevelsInput
}
