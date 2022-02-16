import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TeamMembersCountAggregate } from './team-members-count-aggregate.output'
import { TeamMembersMinAggregate } from './team-members-min-aggregate.output'
import { TeamMembersMaxAggregate } from './team-members-max-aggregate.output'

@ObjectType()
export class AggregateTeamMembers {
  @Field(() => TeamMembersCountAggregate, { nullable: true })
  _count?: TeamMembersCountAggregate

  @Field(() => TeamMembersMinAggregate, { nullable: true })
  _min?: TeamMembersMinAggregate

  @Field(() => TeamMembersMaxAggregate, { nullable: true })
  _max?: TeamMembersMaxAggregate
}
