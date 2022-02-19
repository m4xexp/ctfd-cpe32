import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LevelsUpdateWithoutUserScoresInput } from './levels-update-without-user-scores.input'
import { LevelsCreateWithoutUserScoresInput } from './levels-create-without-user-scores.input'

@InputType()
export class LevelsUpsertWithoutUserScoresInput {
  @Field(() => LevelsUpdateWithoutUserScoresInput, { nullable: false })
  update!: LevelsUpdateWithoutUserScoresInput

  @Field(() => LevelsCreateWithoutUserScoresInput, { nullable: false })
  create!: LevelsCreateWithoutUserScoresInput
}
