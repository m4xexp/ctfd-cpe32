import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresCreateWithoutUsersInput } from './user-scores-create-without-users.input'

@InputType()
export class UserScoresCreateOrConnectWithoutUsersInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresCreateWithoutUsersInput, { nullable: false })
  create!: UserScoresCreateWithoutUsersInput
}
