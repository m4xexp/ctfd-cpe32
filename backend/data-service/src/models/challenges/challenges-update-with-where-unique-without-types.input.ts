import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithoutTypesInput } from './challenges-update-without-types.input'

@InputType()
export class ChallengesUpdateWithWhereUniqueWithoutTypesInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesUpdateWithoutTypesInput, { nullable: false })
  data!: ChallengesUpdateWithoutTypesInput
}
