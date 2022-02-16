import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserBadgesMinAggregate {
  @Field(() => String, { nullable: true })
  user_id?: string

  @Field(() => String, { nullable: true })
  badge_id?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
