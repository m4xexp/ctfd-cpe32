import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TeamMembersCountAggregate } from './team-members-count-aggregate.output'
import { TeamMembersMinAggregate } from './team-members-min-aggregate.output'
import { TeamMembersMaxAggregate } from './team-members-max-aggregate.output'

@ObjectType()
export class TeamMembersGroupBy {
  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => String, { nullable: false })
  team_id!: string

  @Field(() => String, { nullable: false })
  type!: string

  @Field(() => Boolean, { nullable: false })
  status!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => TeamMembersCountAggregate, { nullable: true })
  _count?: TeamMembersCountAggregate

  @Field(() => TeamMembersMinAggregate, { nullable: true })
  _min?: TeamMembersMinAggregate

  @Field(() => TeamMembersMaxAggregate, { nullable: true })
  _max?: TeamMembersMaxAggregate
}
