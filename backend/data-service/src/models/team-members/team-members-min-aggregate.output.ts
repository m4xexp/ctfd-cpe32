import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class TeamMembersMinAggregate {
  @Field(() => String, { nullable: true })
  user_id?: string

  @Field(() => String, { nullable: true })
  team_id?: string

  @Field(() => String, { nullable: true })
  type?: string

  @Field(() => Boolean, { nullable: true })
  status?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
