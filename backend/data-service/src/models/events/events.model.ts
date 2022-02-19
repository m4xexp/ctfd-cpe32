import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Badges } from '../badges/badges.model'

@ObjectType()
export class Events {
  @Field(() => ID, { nullable: false })
  event_id!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  name!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  evnet_description!: string

  @Field(() => Badges, { nullable: false })
  badges?: Badges

  @Field(() => String, { nullable: false })
  award_badge!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  flag_link!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  description!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  question!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  answer!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date
}
