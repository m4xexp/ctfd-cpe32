import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserLoggingsMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  log_id?: true

  @Field(() => Boolean, { nullable: true })
  user_id?: true

  @Field(() => Boolean, { nullable: true })
  action?: true

  @Field(() => Boolean, { nullable: true })
  ip?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
