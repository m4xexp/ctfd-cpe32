import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class TeamsCountAggregate {
  @Field(() => Int, { nullable: false })
  team_id!: number

  @Field(() => Int, { nullable: false })
  team_profile_pic!: number

  @Field(() => Int, { nullable: false })
  name!: number

  @Field(() => Int, { nullable: false })
  conuntry_code!: number

  @Field(() => Int, { nullable: false })
  banned!: number

  @Field(() => Int, { nullable: false })
  github_link!: number

  @Field(() => Int, { nullable: false })
  twitter_link!: number

  @Field(() => Int, { nullable: false })
  facebook_link!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
