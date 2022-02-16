import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'

@ArgsType()
export class FindUniqueChallengesArgs {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput
}
