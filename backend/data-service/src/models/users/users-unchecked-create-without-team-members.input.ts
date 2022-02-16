import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { UserLoggingsUncheckedCreateNestedManyWithoutUsersInput } from '../user-loggings/user-loggings-unchecked-create-nested-many-without-users.input'
import { UserBadgesUncheckedCreateNestedManyWithoutUsersInput } from '../user-badges/user-badges-unchecked-create-nested-many-without-users.input'
import { UserTutorialsUncheckedCreateNestedManyWithoutUsersInput } from '../user-tutorials/user-tutorials-unchecked-create-nested-many-without-users.input'
import { UserScoresUncheckedCreateNestedManyWithoutUsersInput } from '../user-scores/user-scores-unchecked-create-nested-many-without-users.input'

@InputType()
export class UsersUncheckedCreateWithoutTeamMembersInput {
  @Field(() => String, { nullable: true })
  user_id?: string

  @Field(() => Int, { nullable: true })
  user_invite_id?: number

  @Field(() => String, { nullable: true })
  profile_pic?: string

  @Field(() => Float, { nullable: true })
  total_score?: number

  @Field(() => String, { nullable: true })
  type?: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: true })
  conuntry_code?: string

  @Field(() => Boolean, { nullable: true })
  banned?: boolean

  @Field(() => Boolean, { nullable: true })
  verified?: boolean

  @Field(() => Boolean, { nullable: true })
  quick_start_status?: boolean

  @Field(() => String, { nullable: true })
  profile_description?: string

  @Field(() => String, { nullable: true })
  github_link?: string

  @Field(() => String, { nullable: true })
  twitter_link?: string

  @Field(() => String, { nullable: true })
  facebook_link?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UserLoggingsUncheckedCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userLoggings?: UserLoggingsUncheckedCreateNestedManyWithoutUsersInput

  @Field(() => UserBadgesUncheckedCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userBadges?: UserBadgesUncheckedCreateNestedManyWithoutUsersInput

  @Field(() => UserTutorialsUncheckedCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userTutorials?: UserTutorialsUncheckedCreateNestedManyWithoutUsersInput

  @Field(() => UserScoresUncheckedCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userScores?: UserScoresUncheckedCreateNestedManyWithoutUsersInput
}
