import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class BadgesCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  badge_id?: true

  @Field(() => Boolean, { nullable: true })
  condition?: true

  @Field(() => Boolean, { nullable: true })
  name?: true

  @Field(() => Boolean, { nullable: true })
  link?: true

  @Field(() => Boolean, { nullable: true })
  description?: true

  @Field(() => Boolean, { nullable: true })
  status?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true

  @Field(() => Boolean, { nullable: true })
  _all?: true
}
