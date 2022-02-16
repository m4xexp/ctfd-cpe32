import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesCreateInput } from './challenges-create.input'
import { ChallengesUpdateInput } from './challenges-update.input'

@ArgsType()
export class UpsertOneChallengesArgs {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesCreateInput, { nullable: false })
  create!: ChallengesCreateInput

  @Field(() => ChallengesUpdateInput, { nullable: false })
  update!: ChallengesUpdateInput
}
