import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateWithoutUsersInput } from './user-scores-create-without-users.input'
import { UserScoresCreateOrConnectWithoutUsersInput } from './user-scores-create-or-connect-without-users.input'
import { UserScoresUpsertWithWhereUniqueWithoutUsersInput } from './user-scores-upsert-with-where-unique-without-users.input'
import { UserScoresCreateManyUsersInputEnvelope } from './user-scores-create-many-users-input-envelope.input'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresUpdateWithWhereUniqueWithoutUsersInput } from './user-scores-update-with-where-unique-without-users.input'
import { UserScoresUpdateManyWithWhereWithoutUsersInput } from './user-scores-update-many-with-where-without-users.input'
import { UserScoresScalarWhereInput } from './user-scores-scalar-where.input'

@InputType()
export class UserScoresUncheckedUpdateManyWithoutUsersInput {
  @Field(() => [UserScoresCreateWithoutUsersInput], { nullable: true })
  create?: Array<UserScoresCreateWithoutUsersInput>

  @Field(() => [UserScoresCreateOrConnectWithoutUsersInput], { nullable: true })
  connectOrCreate?: Array<UserScoresCreateOrConnectWithoutUsersInput>

  @Field(() => [UserScoresUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true,
  })
  upsert?: Array<UserScoresUpsertWithWhereUniqueWithoutUsersInput>

  @Field(() => UserScoresCreateManyUsersInputEnvelope, { nullable: true })
  createMany?: UserScoresCreateManyUsersInputEnvelope

  @Field(() => [UserScoresWhereUniqueInput], { nullable: true })
  set?: Array<UserScoresWhereUniqueInput>

  @Field(() => [UserScoresWhereUniqueInput], { nullable: true })
  disconnect?: Array<UserScoresWhereUniqueInput>

  @Field(() => [UserScoresWhereUniqueInput], { nullable: true })
  delete?: Array<UserScoresWhereUniqueInput>

  @Field(() => [UserScoresWhereUniqueInput], { nullable: true })
  connect?: Array<UserScoresWhereUniqueInput>

  @Field(() => [UserScoresUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true,
  })
  update?: Array<UserScoresUpdateWithWhereUniqueWithoutUsersInput>

  @Field(() => [UserScoresUpdateManyWithWhereWithoutUsersInput], {
    nullable: true,
  })
  updateMany?: Array<UserScoresUpdateManyWithWhereWithoutUsersInput>

  @Field(() => [UserScoresScalarWhereInput], { nullable: true })
  deleteMany?: Array<UserScoresScalarWhereInput>
}
