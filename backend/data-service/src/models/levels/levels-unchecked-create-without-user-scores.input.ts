import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesUncheckedCreateNestedManyWithoutLevelsInput } from '../challenges/challenges-unchecked-create-nested-many-without-levels.input'

@InputType()
export class LevelsUncheckedCreateWithoutUserScoresInput {
  @Field(() => String, { nullable: true })
  level_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => ChallengesUncheckedCreateNestedManyWithoutLevelsInput, {
    nullable: true,
  })
  challenges?: ChallengesUncheckedCreateNestedManyWithoutLevelsInput
}
