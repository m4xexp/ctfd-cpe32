import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserBadgesCreateWithoutUsersInput } from './user-badges-create-without-users.input'
import { UserBadgesCreateOrConnectWithoutUsersInput } from './user-badges-create-or-connect-without-users.input'
import { UserBadgesUpsertWithWhereUniqueWithoutUsersInput } from './user-badges-upsert-with-where-unique-without-users.input'
import { UserBadgesCreateManyUsersInputEnvelope } from './user-badges-create-many-users-input-envelope.input'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'
import { UserBadgesUpdateWithWhereUniqueWithoutUsersInput } from './user-badges-update-with-where-unique-without-users.input'
import { UserBadgesUpdateManyWithWhereWithoutUsersInput } from './user-badges-update-many-with-where-without-users.input'
import { UserBadgesScalarWhereInput } from './user-badges-scalar-where.input'

@InputType()
export class UserBadgesUpdateManyWithoutUsersInput {
  @Field(() => [UserBadgesCreateWithoutUsersInput], { nullable: true })
  create?: Array<UserBadgesCreateWithoutUsersInput>

  @Field(() => [UserBadgesCreateOrConnectWithoutUsersInput], { nullable: true })
  connectOrCreate?: Array<UserBadgesCreateOrConnectWithoutUsersInput>

  @Field(() => [UserBadgesUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true,
  })
  upsert?: Array<UserBadgesUpsertWithWhereUniqueWithoutUsersInput>

  @Field(() => UserBadgesCreateManyUsersInputEnvelope, { nullable: true })
  createMany?: UserBadgesCreateManyUsersInputEnvelope

  @Field(() => [UserBadgesWhereUniqueInput], { nullable: true })
  set?: Array<UserBadgesWhereUniqueInput>

  @Field(() => [UserBadgesWhereUniqueInput], { nullable: true })
  disconnect?: Array<UserBadgesWhereUniqueInput>

  @Field(() => [UserBadgesWhereUniqueInput], { nullable: true })
  delete?: Array<UserBadgesWhereUniqueInput>

  @Field(() => [UserBadgesWhereUniqueInput], { nullable: true })
  connect?: Array<UserBadgesWhereUniqueInput>

  @Field(() => [UserBadgesUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true,
  })
  update?: Array<UserBadgesUpdateWithWhereUniqueWithoutUsersInput>

  @Field(() => [UserBadgesUpdateManyWithWhereWithoutUsersInput], {
    nullable: true,
  })
  updateMany?: Array<UserBadgesUpdateManyWithWhereWithoutUsersInput>

  @Field(() => [UserBadgesScalarWhereInput], { nullable: true })
  deleteMany?: Array<UserBadgesScalarWhereInput>
}
