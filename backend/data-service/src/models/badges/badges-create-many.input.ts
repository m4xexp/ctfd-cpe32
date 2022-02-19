import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class BadgesCreateManyInput {
  @Field(() => String, { nullable: true })
  badge_id?: string

  @Field(() => String, { nullable: true })
  condition?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  link?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => Boolean, { nullable: true })
  status?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
