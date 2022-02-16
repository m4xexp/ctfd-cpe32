import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { UsersCountAggregate } from './users-count-aggregate.output'
import { UsersAvgAggregate } from './users-avg-aggregate.output'
import { UsersSumAggregate } from './users-sum-aggregate.output'
import { UsersMinAggregate } from './users-min-aggregate.output'
import { UsersMaxAggregate } from './users-max-aggregate.output'

@ObjectType()
export class UsersGroupBy {
  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => Int, { nullable: false })
  user_invite_id!: number

  @Field(() => String, { nullable: true })
  profile_pic?: string

  @Field(() => Float, { nullable: false })
  total_score!: number

  @Field(() => String, { nullable: false })
  type!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: false })
  conuntry_code!: string

  @Field(() => Boolean, { nullable: false })
  banned!: boolean

  @Field(() => Boolean, { nullable: false })
  verified!: boolean

  @Field(() => Boolean, { nullable: false })
  quick_start_status!: boolean

  @Field(() => String, { nullable: false })
  profile_description!: string

  @Field(() => String, { nullable: false })
  github_link!: string

  @Field(() => String, { nullable: false })
  twitter_link!: string

  @Field(() => String, { nullable: false })
  facebook_link!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => UsersCountAggregate, { nullable: true })
  _count?: UsersCountAggregate

  @Field(() => UsersAvgAggregate, { nullable: true })
  _avg?: UsersAvgAggregate

  @Field(() => UsersSumAggregate, { nullable: true })
  _sum?: UsersSumAggregate

  @Field(() => UsersMinAggregate, { nullable: true })
  _min?: UsersMinAggregate

  @Field(() => UsersMaxAggregate, { nullable: true })
  _max?: UsersMaxAggregate
}
