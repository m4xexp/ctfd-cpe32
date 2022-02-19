import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class BadgesWhereUniqueInput {
  @Field(() => String, { nullable: true })
  badge_id?: string
}
