import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { UserLoggings } from '../user-loggings/user-loggings.model'
import { UserBadges } from '../user-badges/user-badges.model'
import { TeamMembers } from '../team-members/team-members.model'
import { UserTutorials } from '../user-tutorials/user-tutorials.model'
import { UserScores } from '../user-scores/user-scores.model'
import { UsersCount } from './users-count.output'

@ObjectType()
export class Users {
  @Field(() => ID, { nullable: false })
  user_id!: string

  @Field(() => Int, { nullable: false })
  user_invite_id!: number

  @Field(() => String, { nullable: true })
  profile_pic!: string | null

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  total_score!: number

  @Field(() => String, { nullable: false, defaultValue: 'user' })
  type!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: false, defaultValue: 'TH' })
  conuntry_code!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  banned!: boolean

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  verified!: boolean

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  quick_start_status!: boolean

  @Field(() => String, { nullable: false, defaultValue: '' })
  profile_description!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  github_link!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  twitter_link!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  facebook_link!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [UserLoggings], { nullable: true })
  userLoggings?: Array<UserLoggings>

  @Field(() => [UserBadges], { nullable: true })
  userBadges?: Array<UserBadges>

  @Field(() => [TeamMembers], { nullable: true })
  teamMembers?: Array<TeamMembers>

  @Field(() => [UserTutorials], { nullable: true })
  userTutorials?: Array<UserTutorials>

  @Field(() => [UserScores], { nullable: true })
  userScores?: Array<UserScores>

  @Field(() => UsersCount, { nullable: false })
  _count?: UsersCount
}
