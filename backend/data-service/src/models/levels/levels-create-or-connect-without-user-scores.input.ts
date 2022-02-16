import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LevelsWhereUniqueInput } from './levels-where-unique.input'
import { LevelsCreateWithoutUserScoresInput } from './levels-create-without-user-scores.input'

@InputType()
export class LevelsCreateOrConnectWithoutUserScoresInput {
  @Field(() => LevelsWhereUniqueInput, { nullable: false })
  where!: LevelsWhereUniqueInput

  @Field(() => LevelsCreateWithoutUserScoresInput, { nullable: false })
  create!: LevelsCreateWithoutUserScoresInput
}
