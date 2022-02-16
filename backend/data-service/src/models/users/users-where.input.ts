import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { FloatFilter } from '../prisma/float-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { UserLoggingsListRelationFilter } from '../user-loggings/user-loggings-list-relation-filter.input'
import { UserBadgesListRelationFilter } from '../user-badges/user-badges-list-relation-filter.input'
import { TeamMembersListRelationFilter } from '../team-members/team-members-list-relation-filter.input'
import { UserTutorialsListRelationFilter } from '../user-tutorials/user-tutorials-list-relation-filter.input'
import { UserScoresListRelationFilter } from '../user-scores/user-scores-list-relation-filter.input'

@InputType()
export class UsersWhereInput {
  @Field(() => [UsersWhereInput], { nullable: true })
  AND?: Array<UsersWhereInput>

  @Field(() => [UsersWhereInput], { nullable: true })
  OR?: Array<UsersWhereInput>

  @Field(() => [UsersWhereInput], { nullable: true })
  NOT?: Array<UsersWhereInput>

  @Field(() => StringFilter, { nullable: true })
  user_id?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  user_invite_id?: IntFilter

  @Field(() => StringNullableFilter, { nullable: true })
  profile_pic?: StringNullableFilter

  @Field(() => FloatFilter, { nullable: true })
  total_score?: FloatFilter

  @Field(() => StringFilter, { nullable: true })
  type?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  conuntry_code?: StringFilter

  @Field(() => BoolFilter, { nullable: true })
  banned?: BoolFilter

  @Field(() => BoolFilter, { nullable: true })
  verified?: BoolFilter

  @Field(() => BoolFilter, { nullable: true })
  quick_start_status?: BoolFilter

  @Field(() => StringFilter, { nullable: true })
  profile_description?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  github_link?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  twitter_link?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  facebook_link?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => UserLoggingsListRelationFilter, { nullable: true })
  userLoggings?: UserLoggingsListRelationFilter

  @Field(() => UserBadgesListRelationFilter, { nullable: true })
  userBadges?: UserBadgesListRelationFilter

  @Field(() => TeamMembersListRelationFilter, { nullable: true })
  teamMembers?: TeamMembersListRelationFilter

  @Field(() => UserTutorialsListRelationFilter, { nullable: true })
  userTutorials?: UserTutorialsListRelationFilter

  @Field(() => UserScoresListRelationFilter, { nullable: true })
  userScores?: UserScoresListRelationFilter
}
