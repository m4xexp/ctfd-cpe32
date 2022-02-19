import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersRelationFilter } from '../users/users-relation-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { TeamsRelationFilter } from '../teams/teams-relation-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class TeamMembersWhereInput {
  @Field(() => [TeamMembersWhereInput], { nullable: true })
  AND?: Array<TeamMembersWhereInput>

  @Field(() => [TeamMembersWhereInput], { nullable: true })
  OR?: Array<TeamMembersWhereInput>

  @Field(() => [TeamMembersWhereInput], { nullable: true })
  NOT?: Array<TeamMembersWhereInput>

  @Field(() => UsersRelationFilter, { nullable: true })
  users?: UsersRelationFilter

  @Field(() => StringFilter, { nullable: true })
  user_id?: StringFilter

  @Field(() => TeamsRelationFilter, { nullable: true })
  teams?: TeamsRelationFilter

  @Field(() => StringFilter, { nullable: true })
  team_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  type?: StringFilter

  @Field(() => BoolFilter, { nullable: true })
  status?: BoolFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
