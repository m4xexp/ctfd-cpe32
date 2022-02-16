import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserLoggingsCreateManyInput {
  @Field(() => String, { nullable: true })
  log_id?: string

  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => String, { nullable: false })
  action!: string

  @Field(() => String, { nullable: false })
  ip!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
