import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TypesUpdateWithoutChallengesInput } from './types-update-without-challenges.input'
import { TypesCreateWithoutChallengesInput } from './types-create-without-challenges.input'

@InputType()
export class TypesUpsertWithoutChallengesInput {
  @Field(() => TypesUpdateWithoutChallengesInput, { nullable: false })
  update!: TypesUpdateWithoutChallengesInput

  @Field(() => TypesCreateWithoutChallengesInput, { nullable: false })
  create!: TypesCreateWithoutChallengesInput
}
