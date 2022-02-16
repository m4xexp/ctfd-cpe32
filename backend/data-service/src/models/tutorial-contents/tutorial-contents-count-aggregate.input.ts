import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TutorialContentsCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  tutorial_id?: true

  @Field(() => Boolean, { nullable: true })
  name?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true

  @Field(() => Boolean, { nullable: true })
  _all?: true
}
