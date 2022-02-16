import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { UserBadges } from '../user-badges/user-badges.model'
import { Events } from '../events/events.model'
import { Challenges } from '../challenges/challenges.model'
import { BadgesCount } from './badges-count.output'

@ObjectType()
export class Badges {
  @Field(() => ID, { nullable: false })
  badge_id!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  condition!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  name!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  link!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  description!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  status!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [UserBadges], { nullable: true })
  userBadges?: Array<UserBadges>

  @Field(() => [Events], { nullable: true })
  events?: Array<Events>

  @Field(() => [Challenges], { nullable: true })
  challenges?: Array<Challenges>

  @Field(() => BadgesCount, { nullable: false })
  _count?: BadgesCount
}
