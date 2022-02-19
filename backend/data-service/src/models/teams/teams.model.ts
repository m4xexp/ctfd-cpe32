import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { TeamMembers } from '../team-members/team-members.model'
import { TeamsCount } from './teams-count.output'

@ObjectType()
export class Teams {
  @Field(() => ID, { nullable: false })
  team_id!: string

  @Field(() => String, { nullable: true })
  team_profile_pic!: string | null

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false, defaultValue: 'TH' })
  conuntry_code!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  banned!: boolean

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

  @Field(() => [TeamMembers], { nullable: true })
  teamMembers?: Array<TeamMembers>

  @Field(() => TeamsCount, { nullable: false })
  _count?: TeamsCount
}
