import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateNestedManyWithoutTypesInput } from '../user-scores/user-scores-create-nested-many-without-types.input'
import { ChallengesCreateNestedManyWithoutTypesInput } from '../challenges/challenges-create-nested-many-without-types.input'

@InputType()
export class TypesCreateInput {
  @Field(() => String, { nullable: true })
  types_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UserScoresCreateNestedManyWithoutTypesInput, { nullable: true })
  userScores?: UserScoresCreateNestedManyWithoutTypesInput

  @Field(() => ChallengesCreateNestedManyWithoutTypesInput, { nullable: true })
  challenges?: ChallengesCreateNestedManyWithoutTypesInput
}
