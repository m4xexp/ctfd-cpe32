import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ChallengesUpdateInput } from './challenges-update.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'

@ArgsType()
export class UpdateOneChallengesArgs {
  @Field(() => ChallengesUpdateInput, { nullable: false })
  data!: ChallengesUpdateInput

  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput
}
