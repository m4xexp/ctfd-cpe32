import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresCreateWithoutTypesInput } from './user-scores-create-without-types.input'

@InputType()
export class UserScoresCreateOrConnectWithoutTypesInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresCreateWithoutTypesInput, { nullable: false })
  create!: UserScoresCreateWithoutTypesInput
}
