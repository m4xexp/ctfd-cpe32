import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersWhereUniqueInput } from './users-where-unique.input'
import { UsersCreateWithoutUserScoresInput } from './users-create-without-user-scores.input'

@InputType()
export class UsersCreateOrConnectWithoutUserScoresInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  where!: UsersWhereUniqueInput

  @Field(() => UsersCreateWithoutUserScoresInput, { nullable: false })
  create!: UsersCreateWithoutUserScoresInput
}
