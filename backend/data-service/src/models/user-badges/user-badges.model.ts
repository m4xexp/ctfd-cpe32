import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Users } from '../users/users.model'
import { Badges } from '../badges/badges.model'

@ObjectType()
export class UserBadges {
  @Field(() => Users, { nullable: false })
  users?: Users

  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => Badges, { nullable: false })
  badges?: Badges

  @Field(() => String, { nullable: false })
  badge_id!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date
}
