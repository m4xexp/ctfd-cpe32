import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class TeamsCount {
  @Field(() => Int, { nullable: false })
  teamMembers!: number
}
