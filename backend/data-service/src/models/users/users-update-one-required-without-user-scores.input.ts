import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersCreateWithoutUserScoresInput } from './users-create-without-user-scores.input'
import { UsersCreateOrConnectWithoutUserScoresInput } from './users-create-or-connect-without-user-scores.input'
import { UsersUpsertWithoutUserScoresInput } from './users-upsert-without-user-scores.input'
import { UsersWhereUniqueInput } from './users-where-unique.input'
import { UsersUpdateWithoutUserScoresInput } from './users-update-without-user-scores.input'

@InputType()
export class UsersUpdateOneRequiredWithoutUserScoresInput {
  @Field(() => UsersCreateWithoutUserScoresInput, { nullable: true })
  create?: UsersCreateWithoutUserScoresInput

  @Field(() => UsersCreateOrConnectWithoutUserScoresInput, { nullable: true })
  connectOrCreate?: UsersCreateOrConnectWithoutUserScoresInput

  @Field(() => UsersUpsertWithoutUserScoresInput, { nullable: true })
  upsert?: UsersUpsertWithoutUserScoresInput

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput

  @Field(() => UsersUpdateWithoutUserScoresInput, { nullable: true })
  update?: UsersUpdateWithoutUserScoresInput
}
